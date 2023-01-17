"use client";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Link from "next/link";
import DiscoverCard from "./card";

const Item = [
  {
    image: "../assets/calender.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/bulb.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/music.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always from",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/house.jpg",
    name: "Titus Kitamura",
    heading: "Can you Imagine, world",
    time: "16 Qs",
    avtar: "../assets/image6.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/calender.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/bulb.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/music.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always From",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/house.jpg",
    name: "Titus Kitamura",
    heading: "Can you Imagine, world",
    time: "16 Qs",
    avtar: "../assets/image6.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
];

function DiscoverItems() {
  return (
    <DiscoverItems1>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <Link href="/home">
            <div>
              <BsArrowLeft className="text-2xl" />
            </div>
          </Link>
          <div className="font-bold text-[20px]">Discover</div>
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
      <div>
        {Item.map((i) => {
          return <DiscoverCard value={i} key={i.name} />;
        })}
      </div>
    </DiscoverItems1>
  );
}

export default DiscoverItems;
const DiscoverItems1 = styled.div`
  padding: 0px 0px 60px 0px;
`;
