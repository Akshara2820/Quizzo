"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CollectionData } from "../../../utils/data";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import {HiOutlineArrowsUpDown} from 'react-icons/hi2'
import styled from "styled-components";
import TopicsCard from "./card";

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

function Topics() {
  const query = useSearchParams();
  const [data, setData] = useState({});

  console.table(data);

  useEffect(() => {
    setData(CollectionData.filter((i) => i.id == query.get("id"))[0]);
  }, [query]);

  return (
    <Topics1>
      <div className="flex justify-between items-center gap-4 header">
        <div className="flex items-center gap-6">
          <Link href="/collection">
            <div>
              <BsArrowLeft className="text-2xl" />
            </div>
          </Link>
          <div className="font-bold text-[20px]">{data?.heading}</div>
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
      <img className="mt-6 rounded-2xl" src={data?.image} alt="sf" />
      <div className="flex justify-between mt-4">
        <h1 className="text-2xl font-bold">245 Quizzo</h1>
        <div className="flex gap-2 items-center text-[#6949ff] font-semibold">
          <p className="text-[18px]">Default</p>
          <HiOutlineArrowsUpDown className="text-[18px]"/>
        </div>
      </div>
      <div>
        {Item.map((i) => {
          return <TopicsCard value={i} key={i.name} />;
        })}
      </div>

      
    </Topics1>
  );
}

export default Topics;
const Topics1 = styled.div`
 padding-bottom: 60px;
  .header {
    padding: 1rem;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
  }
`
