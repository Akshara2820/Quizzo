"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import CollectionCard from "./card";
import { CollectionData } from "../../utils/data";
import styled from "styled-components";

const Items = [
  {
    image: "../assets/education.jpg",
    heading: "Education",
    link_: "/collection/education",
  },
  {
    image: "../assets/car.jpg",
    heading: "Education",
    link_: "/collection/games",
  },
  {
    image: "../assets/education.jpg",
    heading: "Education",
    link_: "/collection/education",
  },
  {
    image: "../assets/car.jpg",
    heading: "Education",
    link_: "/collection/education",
  },
  {
    image: "../assets/education.jpg",
    heading: "Education",
    link_: "/collection/education",
  },
  {
    image: "../assets/car.jpg",
    heading: "Education",
    link_: "/collection/education",
  },
];
function Collections() {
  return (
    <Collections1>
      <div className="flex justify-between items-center gap-4 header ">
        <div className="flex items-center gap-6">
          <Link href="/home">
            <div>
              <BsArrowLeft className="text-2xl" />
            </div>
          </Link>
          <div className="font-bold text-[20px]">Top Collections</div>
        </div>
        <div>
          <FaSearch />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 ">
        {CollectionData.map((i) => {
          return <CollectionCard value={i} key={i.name} />;
        })}
      </div>
    </Collections1>
  );
}

export default Collections;
const Collections1 = styled.div`
  padding-bottom: 60px;
  .header {
    padding: 1rem;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
  }
`;
