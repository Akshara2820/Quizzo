"use client";

import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import MainHeader from "../header/mainHeader";
import AuthorsList from "./AuthorsList";
import Link from "next/link";
import styled from "styled-components";
const Items = [
  {
    id: 1,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image1.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 2,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image2.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 3,
    url: "../assets/image5.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 4,
    url: "../assets/image6.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 5,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image1.jpg",
    userFollow: "Following",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 6,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image2.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 7,
    url: "../assets/image5.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 8,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image6.jpg",
    userFollow: "Following",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 9,
    url: "../assets/image1.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 10,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image5.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 11,
    url: "../assets/image2.jpg",
    userFollow: "Follow",
    name: "Education",
    username: "@sdducation",
  },
  {
    id: 12,
    vipTick: <BsFillPatchCheckFill className="vip-tick" />,
    url: "../assets/image6.jpg",
    userFollow: "Following",
    name: "Education",
    username: "@sdducation",
  },
];
export default function Authors() {
  return (
    <Authors1>
      <MainHeader
        title={
          <div className="flex justify-between items-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <Link href="/home">
                <div>
                  <BsArrowLeft className="text-2xl" />
                </div>
              </Link>
              <div className="font-bold text-[20px]">Top Authors</div>
            </div>
            <FiSearch className="text-xl" />
          </div>
        }
      />

      <div className="px-4">
        {Items.map((i) => {
          return <AuthorsList value={i} key={i.id} />;
        })}
      </div>
    </Authors1>
  );
}

const Authors1 = styled.div`
  padding-bottom: 50px;
`;
