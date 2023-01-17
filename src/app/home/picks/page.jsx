"use client"
import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";
const card = [
  {
    id: 1,
    url: "./assets/education.jpg",
    time: "16 Qs",
    name: "Education",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assets/image1.jpg",
  },
  {
    id: 2,
    url: "./assets/play.jpg",
    time: "16 Qs",
    name: "Game",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assets/image2.jpg",
  },
  {
    id: 3,
    url: "./assets/growup.webp",
    time: "16 Qs",
    name: "Bussiness",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assets/image5.jpg",
  },
  {
    id: 4,
    url: "./assets/earth.jpg",
    time: "16 Qs",
    name: "Plants",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assets/image6.jpg",
  },
  {
    id: 5,
    url: "./assets/piggy_bank.jpg",
    time: "16 Qs",
    name: "Finance",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assets/image5.jpg",
  },
  {
    id: 6,
    url: "./assets/pizza.jpg",
    time: "16 Qs",
    name: "Lifstyle",
    desc: "Get Smarter With Productivity Quizz...",
    userUrl: "./assets/image6.jpg",
  },
];
export default function TopPicks() {
  return (
    <Root>
      <div className="flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Top Picks</div>
        <div className="text-[#6949ff] flex items-center gap-3 text-xl font-semibold">
          <div>View all</div>
          <BsArrowRight />
        </div>
      </div>

      <div className="hs ml-4 full no-scrollbar sm:flex sm:justify-center sm:gap-4 ">
        {card.map((i) => {
          return <Card value={i} key={i.id} />;
        })}
      </div>
    </Root>
  );
}
const Root = styled.div`
  padding: 1rem 0px;

  .no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding: 0;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hs > li,
  .item {
    scroll-snap-align: center;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    .hs {
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      overflow-x: scroll;
      scroll-snap-type: x proximity;
    }
  }
`;
