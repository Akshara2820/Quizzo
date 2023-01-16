'use client'
import React from "react";
import { BsArrowLeft, BsChevronRight, BsFacebook,BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { RiBook2Fill } from "react-icons/ri";
import styled from "styled-components";

function FindFriends() {
  return (
    <FindFriends1>
      <div className="flex items-center gap-4">
        <Link href="/">
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
        <h1 className="text-[20px] font-bold" >People you may know</h1>
        <div className="flex gap-4 items-center text-violet-700 text-[18px] font-bold">
          <p>view all</p>
          <p><BsArrowRight/></p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-14" src="../assets/image1.jpg" alt=""/>
          <p className="font-bold text-[18px]">Darron Kulikowski</p>
        </div>
        <button className="bg-indigo-700 text-white px-3 py-1 text-[14px] rounded-full">Follow</button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-14" src="../assets/image2.jpg" alt=""/>
          <p className="font-bold text-[18px]">Maryland winkles</p>
        </div>
        <button className="bg-indigo-700 text-white px-3 py-1 text-[14px] rounded-full">Follow</button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-14" src="../assets/image5.jpg" alt=""/>
          <p className="font-bold text-[18px]">Lauralee Quintero</p>
        </div>
        <button className="bg-indigo-700 text-white px-3 py-1 text-[14px] rounded-full">Follow</button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-14" src="../assets/image6.jpg" alt=""/>
          <p className="font-bold text-[18px]">Alfonzo Schuessler</p>
        </div>
        <button className="bg-indigo-700 text-white px-3 py-1 text-[14px] rounded-full">Follow</button>
      </div>

    </FindFriends1>
  );
}

export default FindFriends;
const FindFriends1 = styled.div`
.facebook-box{
  box-shadow:#cacfcc 0px 4px 0px;
}
`
