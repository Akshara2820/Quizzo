"use client";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import styled from "styled-components";
export default function MainHeader() {
  return (
    <Root>
      <div className="flex justify-between items-center ">
        <Link href='/'>
        <div className="flex gap-2 ">
          <img
            src="./logo.png"
            alt="loding logo"
            className="w-8 h-8 object-contain"
          />
          <div className="text-2xl font-bold text-center ">Quizzo</div>
        </div>
        </Link>
        <div className="flex items-center gap-2 text-2xl">
          <FiSearch />
          <IoNotificationsOutline />
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  padding: 1rem;
  position: sticky; 
  top: 0px;
  background: white;
  z-index: 10;
`