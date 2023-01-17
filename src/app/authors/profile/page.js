"use client";
import React, { useState } from "react";
import {
  BsArrowLeft,
  BsCheckLg,
  BsFacebook,
  BsFillPatchCheckFill,
  BsReddit,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { SiDiscord, SiGooglemessages, SiTiktok } from "react-icons/si";
import { AiFillInstagram, AiOutlineMessage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaGlobe, FaYahoo } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";

import Link from "next/link";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";
import Quizzo from "./Quizzo";
import MainHeader from "../../header/mainHeader";
const QuizzoItem = [
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
    image: "../assets/idea-bulb.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/car.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always from",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/play.jpg",
    name: "Titus Kitamura",
    heading: "Can you Imagine, world",
    time: "16 Qs",
    avtar: "../assets/image6.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/house.jpg",
    name: "Titus Kitamura",
    heading: "Get Smarter with Products",
    time: "16 Qs",
    avtar: "../assets/image1.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/zoom_meeting.jpg",
    name: "Titus Kitamura",
    heading: "Great Idea Come from",
    time: "16 Qs",
    avtar: "../assets/image2.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
  {
    image: "../assets/smile-emojis.jpg",
    name: "Titus Kitamura",
    heading: "Having Fun & Always From",
    time: "16 Qs",
    avtar: "../assets/image5.jpg",
    play: "5.6K plays",
    month: "2 months ago",
  },
];
const CollectionItems = [
  { id: 1, image: "../assets/education.jpg", heading: "Education" },
  { id: 2, image: "../assets/car.jpg", heading: "Education" },
  { id: 3, image: "../assets/calender.jpg", heading: "Education" },
  { id: 4, image: "../assets/puzzle.webp", heading: "Education" },
  { id: 5, image: "../assets/school.jpg", heading: "Education" },
  { id: 6, image: "../assets/music.jpg", heading: "Education" },
  { id: 7, image: "../assets/piggy_bank.jpg", heading: "Education" },
  { id: 8, image: "../assets/location.jpg", heading: "Education" },
  { id: 9, image: "../assets/house.jpg", heading: "Education" },
  { id: 10, image: "../assets/growup.webp", heading: "Education" },
  { id: 11, image: "../assets/food.jpg", heading: "Education" },
  { id: 12, image: "../assets/bulb.jpg", heading: "Education" },
];
export default function Profile() {
  const [tab, setTab] = useState("Quizzo");
  const [openModel, setOpenModel] = useState(false);
  return (
    <Root>
      <MainHeader
        title={
          <div className="flex py-2 items-center justify-between gap-2 text-2xl">
            <Link href="/home">
              <BsArrowLeft />
            </Link>
            <div className="flex items-center gap-4">
              <FiSend onClick={() => setOpenModel((s) => !s)} />
              <AiOutlineMessage />
            </div>
          </div>
        }
      />
      <div className="px-4">
        <div className=" h-[120px]  overflow-hidden rounded-2xl">
          <img
            src="../assets/play.jpg"
            alt="loding image"
            className="aspect-auto"
          />
        </div>

        <div className="flex justify-between items-center my-4 ">
          <div className="flex gap-2 items-center ">
            <img
              src="../assets/image1.jpg"
              alt="loding imag"
              className="rounded-full w-14 object-cover "
            />
            <div className="flex  gap-1 ">
              <div>
                <div className="font-bold  ">Rayford Eddings</div>
                <div className="font-semibold text-sm text-[#616161]">
                  @rayford_eddings
                </div>
              </div>
              <div className="text-[#1a96f0] mt-1">
                <BsFillPatchCheckFill />
              </div>
            </div>
          </div>
          <button className="text-sm text-white rounded-full py-2 px-4 bg-[#6949ff]">
            Follow
          </button>
        </div>

        <hr />
        <div className="flex justify-between items-center p-3">
          <div className="text-center">
            <div className="font-bold">265</div>
            <div className="text-sm text-center">Quizzo</div>
          </div>
          <hr className="rotate-90 w-10" />
          <div className="text-center">
            <div className="font-bold">32M</div>
            <div className="text-sm text-center">Plays</div>
          </div>
          <hr className="rotate-90 w-10" />
          <div className="text-center">
            <div className="font-bold">274M</div>
            <div className="text-sm text-center"> Players</div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-3">
          <div className="text-center">
            <div className="font-bold">265</div>
            <div className="text-sm text-center">Quizzo</div>
          </div>
          <hr className="rotate-90 w-10" />
          <div className="text-center">
            <div className="font-bold">32M</div>
            <div className="text-sm text-center">Plays</div>
          </div>
          <hr className="rotate-90 w-10" />
          <div className="text-center">
            <div className="font-bold">274M</div>
            <div className="text-sm text-center"> Players</div>
          </div>
        </div>
        <hr />

        <div className="flex justify-between gap-1 items-center my-4">
          <button
            onClick={() => setTab("Quizzo")}
            className={
              tab == "Quizzo"
                ? "text-sm text-white rounded-full py-2 px-8 bg-[#6949ff]"
                : "text-sm text-[#6949ff] rounded-full py-2 px-4 border font-bold border-[#6949ff]"
            }
          >
            Quizzo
          </button>
          <button
            onClick={() => setTab("Collections")}
            className={
              tab == "Collections"
                ? "text-sm text-white rounded-full py-2 px-8 bg-[#6949ff]"
                : "text-sm text-[#6949ff] rounded-full py-2 px-4 border font-bold border-[#6949ff]"
            }
          >
            Collections
          </button>
          <button
            onClick={() => setTab("About")}
            className={
              tab == "About"
                ? "text-sm text-white rounded-full py-2 px-8 bg-[#6949ff]"
                : "text-sm text-[#6949ff] rounded-full py-2 px-4 border font-bold border-[#6949ff]"
            }
          >
            About
          </button>
        </div>
        {tab === "Quizzo" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">265 Quizzo</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="my-4">
              {QuizzoItem.map((i) => {
                return <Quizzo value={i} key={i.name} />;
              })}
            </div>
          </>
        ) : null}
        {tab === "Collections" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">265 Collections</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5  mb-4">
              {CollectionItems.map((i) => {
                return <CollectionCard value={i} key={i.id} />;
              })}
            </div>
          </>
        ) : null}
        {tab === "About" ? (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">265 about</div>
              <div className="flex gap-2 items-center text-[#6949ff]">
                <div>Newest</div>
                <div>
                  <RiArrowUpDownLine />
                </div>
              </div>
            </div>
            <div className="my-4 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque maximus consequat faucibus. Donec hendrerit varius
              ipsum, at fermentum sapien lacinia sed. In suscipit porttitor urna
              ac lacinia.
            </div>
            <div className="font-semibold">
              Nunc facilisis mi enim. Nam dignissim, lacus ac varius posuere,
              mauris sem varius nisi, quis malesuada erat velit nec felis
            </div>
            <div className="flex my-4 gap-4 items-center text-2xl text-[#6949ff]">
              <FaGlobe onClick={() => setOpenModel((s) => !s)} />
              <AiFillInstagram onClick={() => setOpenModel((s) => !s)} />
              <BsTwitter onClick={() => setOpenModel((s) => !s)} />
              <BsFacebook onClick={() => setOpenModel((s) => !s)} />
              <SiDiscord onClick={() => setOpenModel((s) => !s)} />
              <BsReddit onClick={() => setOpenModel((s) => !s)} />
            </div>
          </>
        ) : null}
        
      </div>

      <div>
        {openModel ? (
          <>
            <div
              onClick={() => setOpenModel((s) => !s)}
              className="left-0 h-[100%] absolute z-10 w-[100%] top-0  bg-[#000000ad]"
            >
              <div className="w-full bottom-0 absolute  bg-white rounded-t-3xl p-2 modelBox zoom-in-zoom-out">
                <hr className="w-8 mx-auto" />
                <div className="text-center font-bold text-xl py-4">Share</div>
                <hr />
                <div className="flex justify-between items-center gap-2 my-4">
                  <div className="">
                    <BsWhatsapp className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#42ea60]" />
                    <div className="text-sm text-center">WhatsApp</div>
                  </div>
                  <div>
                    <BsTwitter className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#1da1f2]" />
                    <div className="text-sm text-center">Twitter</div>
                  </div>
                  <div>
                    <FaFacebookF className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#0b8ef3]" />
                    <div className="text-sm text-center">Facebook</div>
                  </div>
                  <div>
                    <AiFillInstagram className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#cd308f]" />
                    <div className="text-sm text-center">Instagram</div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2 my-4">
                  <div>
                    <FaYahoo className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#6939e3]" />
                    <div className="text-sm text-center">Yahoo</div>
                  </div>
                  <div>
                    <SiTiktok className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#220c1d]" />
                    <div className="text-sm text-center">Tiktok</div>
                  </div>
                  <div>
                    <SiGooglemessages className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#1973e8]" />
                    <div className="text-sm text-center">Chat</div>
                  </div>
                  <div>
                    <IoLogoWechat className="text-white text-5xl mx-auto p-2 rounded-xl bg-[#1ede6c]" />
                    <div className="text-sm text-center">Wechat</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Root>
  );
}

const Root = styled.div`
padding-bottom: 40px;
`;
