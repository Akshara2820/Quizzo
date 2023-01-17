"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaGlobe, FaRegUser } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import MainHeader from "../header/mainHeader";
import Quizzo from "./Quizzo";
import Favorites from "./Favorites";
import LibraryCollection from "./CollectionCard";
import styled from "styled-components";
import Link from 'next/link'

const QuizzoItem = [
  {
    image: "../assets/calender.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    public: "Public",
    publicIcon: <HiOutlineUserGroup />,
    month: "2 months ago",
  },
  {
    image: "../assets/idea-bulb.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    publicIcon: <FaRegUser />,
    public: "Only Me",
    month: "2 months ago",
  },
  {
    image: "../assets/growup.webp",
    name: "Titus Kitamura",
    heading: "Having Fun & Always from",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    publicIcon: <FaRegUser />,
    public: "Only Me",
    month: "2 months ago",
  },
  {
    image: "../assets/car.jpg",
    name: "Titus Kitamura",
    heading: "Can you Imagine, world",
    time: "16 Qs",
    avtar: "../assets/image6.jpg",
    play: "5.6K plays",
    public: "Public",
    publicIcon: <HiOutlineUserGroup />,
    month: "2 months ago",
  },
  {
    image: "../assets/play.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    publicIcon: <FaRegUser />,
    public: "Only Me",
    month: "2 months ago",
  },
  {
    image: "../assets/food.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    public: "Public",
    publicIcon: <HiOutlineUserGroup />,
    month: "2 months ago",
  },
  {
    image: "../assets/calendar_pen.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always From",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    publicIcon: <FaRegUser />,
    public: "Only Me",
    month: "2 months ago",
  },
];
const FavoritesItem = [
  {
    image_: "../assets/calender.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image_: "../assets/idea-bulb.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image_: "../assets/car.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always from",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image_: "../assets/house.jpg",
    name: "Titus Kitamura",
    heading: "Can you Imagine, world",
    time: "16 Qs",
    avtar: "../assets/image6.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image_: "../assets/food.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image_: "../assets/calendar_pen.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image_: "../assets/music.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always From",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
];
const CollectionItem = [
  { id: 1, Collection_image: "../assets/education.jpg", heading: "Education" },
  { id: 2, Collection_image: "../assets/car.jpg", heading: "Games" },
  { id: 3, Collection_image: "../assets/bulb.jpg", heading: "Idea" },
  { id: 4, Collection_image: "../assets/growup.webp", heading: "Grow Up" },
  { id: 5, Collection_image: "../assets/education.jpg", heading: "Education" },
  {
    id: 6,
    Collection_image: "../assets/smile-emojis.jpg",
    heading: "Education",
  },
  {
    id: 7,
    Collection_image: "../assets/location-earth.jpg",
    heading: "Locations",
  },
  { id: 8, Collection_image: "../assets/piggy_bank.jpg", heading: "Saving" },
  { id: 9, Collection_image: "../assets/puzzle.webp", heading: "Puzzle" },
  {
    id: 10,
    Collection_image: "../assets/smile-emojis.jpg",
    heading: "Education",
  },
  { id: 11, Collection_image: "../assets/play.jpg", heading: "Players" },
  { id: 12, Collection_image: "../assets/school.jpg", heading: "School" },
];

const Tabs = ["Quizzo", "Favorite", "Collection"];
export default function Library() {
  const [tab, setTab] = useState("Quizzo");
  return (
    <Library1>
      <MainHeader
        title={
          <div className="flex justify-between items-center ">
          <Link href='/home'>

            <div className="flex gap-2 ">
              <img
                src="./logo.png"
                alt="loding logo"
                className="w-8 h-8 object-contain"
              />
              <div className="text-2xl font-bold text-center ">Library</div>
            </div>
          </Link>
            <div className="flex items-center gap-2 text-2xl">
              <FiSearch />
            </div>
          </div>
        }
      />

      <div className="">
        <div className="flex items-center mb-4 ">
          <button
            onClick={() => setTab("Quizzo")}
            className={
              tab == "Quizzo"
                ? "border-b border-[#6949ff] py-2 px-2 font-bold  text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b font-bold border-[#9e9e9e]"
            }
          >
            My Quizzo
          </button>
          <button
            onClick={() => setTab("Favorite")}
            className={
              tab == "Favorite"
                ? "border-b border-[#6949ff] py-2 font-bold  text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b font-bold border-[#9e9e9e]"
            }
          >
            Favorite
          </button>
          <button
            onClick={() => setTab("Collection")}
            className={
              tab == "Collection"
                ? " border-b border-[#6949ff] py-2 font-bold text-[#6949ff]"
                : " text-[#9e9e9e]  py-2 px-4 border-b font-bold border-[#9e9e9e]"
            }
          >
            Collection
          </button>
        </div>
        {tab === "Quizzo" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">45 Quizzo</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="">
              {QuizzoItem.map((i) => {
                return <Quizzo value={i} key={i.name} />;
              })}
            </div>
          </>
        ) : null}
        {tab === "Favorite" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">28 Favorite</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="">
              {FavoritesItem.map((i) => {
                return <Favorites value={i} key={i.name} />;
              })}
            </div>
          </>
        ) : null}
        {tab === "Collection" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">7 Collections</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 ">
              {CollectionItem.map((k) => {
                return <LibraryCollection value={k} key={k.id} />;
              })}
            </div>
          </>
        ) : null}
      </div>
    </Library1>
  );
}

const Library1 = styled.div`
padding-bottom: 50px;
`