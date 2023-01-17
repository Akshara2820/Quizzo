"use client";
import React, { useState } from "react";
import {
  BsArrowLeft,
  BsChevronRight,
  BsFacebook,
  BsArrowRight,
} from "react-icons/bs";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { RiBook2Fill } from "react-icons/ri";
import styled from "styled-components";
import { useProgress } from "../../context/context";

const Item = [
  { image: "../assets/image2.jpg", name: "Maryland winkles", follow: "Follow" },
  {
    image: "../assets/image5.jpg",
    name: "Lauralee Quintero",
    follow: "Follow",
  },
  {
    image: "../assets/image6.jpg",
    name: "Alfonzo Schuessler",
    follow: "Follow",
  },
  {
    image: "../assets/image1.jpg",
    name: "Akshara Mishra",
    follow: "Follow",
  },
];

function FindFriends() {
  const { setSearch, search } = useProgress();

  return (
    <FindFriends1>
      <div className="flex items-center gap-4">
        <Link href="/home">
          <div>
            <BsArrowLeft className="text-2xl" />
          </div>
        </Link>
        <div className="font-bold text-[20px]">Find Friends</div>
      </div>
      <div className="mt-10">
        <div className="absolute top-16 px-4 py-1 text-gray-400 mt-10">
          <FaSearch />
        </div>
        <input
          className="bg-gray-200 p-4 rounded-md w-full px-10 outline-none"
          type="text"
          placeholder="Search email, name, or phone number"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="border facebook-box border-gray-300 mt-10 rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="text-[40px] text-teal-600">
              <RiBook2Fill />
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Search Contact</h1>
              <div className="text-[16px] opacity-12">
                Find friend via phone
              </div>
            </div>
          </div>
          <div>
            <BsChevronRight />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center mt-6">
            <div className="text-[40px] text-blue-600">
              <BsFacebook />
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Contact to Facebook</h1>
              <div className="text-[16px]">Find friend via facebook</div>
            </div>
          </div>
          <div>
            <BsChevronRight />
          </div>
        </div>
        <hr className="mt-4" />

        <div className="flex items-center justify-between">
          <div className="flex gap-6 items-center mt-6">
            <div className="text-[40px] text-pink-600">
              <GiFeather />
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Invite Friends</h1>
              <div className="text-[16px] opacity-12">
                Find friend to play ludo
              </div>
            </div>
          </div>
          <div>
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <h1 className="text-[20px] font-bold">People you may know</h1>
        <Link href='/discover'>
        <div className="flex gap-4 items-center text-violet-700 text-[18px] font-bold">
          <p>view all</p>
          <p>
            <BsArrowRight />
          </p>
        </div>
        </Link>
      </div>

      {Item.filter((i) => {
        if (search === "") {
          return i;
        } else if (
          i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return i;
        }
      }).map((i) => {
        return (
          <div key={i.name} className="flex justify-between items-center mt-4">
            <div className="flex gap-4 items-center">
              <img className="rounded-full w-14" src={i.image} alt="logo" />
              <p className="font-bold text-[18px]">{i.name}</p>
            </div>
            <button className="bg-indigo-700 text-white px-3 py-1 text-[14px] rounded-full">
              Follow
            </button>
          </div>
        );
      })}
    </FindFriends1>
  );
}

export default FindFriends;
const FindFriends1 = styled.div`
  .facebook-box {
    box-shadow: #cacfcc 0px 4px 0px;
  }
`;
