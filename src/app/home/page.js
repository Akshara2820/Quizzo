"use client";
import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Authors from "./authors/page";
import Collections from "./collections/page";
import Discover from "./discover/page";
import TopPicks from "./picks/page";
import TrendingQuiz from "./quiz/page";
import MainHeader from "../mainHeader";
import Link from "next/link";

export default function Home() {
  return (
    <Root>
      <MainHeader />
      <div className="find_user_card">
        <div>
          <div className="text-2xl ">
            Play quiz together with your friends now!
          </div>
          <Link href='/find-friend'>
          <button className="text-[#7c60ff] bg-white rounded-full my-4 px-4 py-2">
            Find Friends
          </button>
          </Link>
        </div>
        <div className="relative">
          <div className="border-white absolute top-[60px] right-[100px] border-2 rounded-full w-[45px] h-[45px] overflow-hidden">
            <img src="./assets/user1.svg" alt="loding.." className="w-sfull " />
          </div>
          <div className="border-white border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <img src="./assets/user2.svg" alt="loding.." className="w-sfull " />
          </div>
          <div className="border-white absolute top-[35px] right-[40px] border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <img src="./assets/user3.svg" alt="loding.." className="w-full " />
          </div>
          <div className="border-white border-2 absolute top-[70px] right-[0px] rounded-full w-[50px] h-[50px] overflow-hidden">
            <img src="./assets/user4.svg" alt="loding.." className="w-sfull " />
          </div>
          <div className="border-white absolute top-[80px] right-[60px] border-2 rounded-full w-[40px] h-[40px] overflow-hidden">
            <img src="./assets/user3.svg" alt="loding.." className="w-full " />
          </div>
        </div>
      </div>
      <Discover />
      <Authors />
      <Collections />
      <TrendingQuiz />
      <TopPicks />
      <Footer />
    </Root>
  );
}

const Root = styled.div`
  .find_user_card {
    box-shadow: #543acc 0px 5px 0px;
    margin: 25px 16px;
    border-radius: 20px;
    padding: 20px 10px;
    font-weight: 600;
    background-color: #7f62ff;
    color: white;
    display: flex;
    gap: 4px;
  }
`;
