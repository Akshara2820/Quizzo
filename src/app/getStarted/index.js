"use client";
import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GetStarted from "../../components/button/getStarted";

const quizTitlw = [
  {
    id: 1,
    url: "./createquiz.svg",
    title: "Create ,share and play quizzes whenever and wherever you want",
  },
  {
    id: 2,
    url: "./findquiz.svg",
    title: "Find fun and interesting quizzes to boost up your knowledge",
  },
  {
    id: 3,
    url: "./playquiz.svg",
    title: "Play and take quiz challenges together with your friends.",
  },
];
function CreateQuiz() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Root>
      <Slider {...settings}>
        {quizTitlw.map((i) => {
          return (
            <div key={i.id}>
              <img src={i.url} alt="loding image" className="h-[350px]" />
              <div className="text-title text-2xl font-semibold text-center my-4">
                {i.title}
              </div>
            </div>
          );
        })}
      </Slider>
      <GetStarted/>
    </Root>
  );
}

export default CreateQuiz;
const Root = styled.div`
  position: relative;
  overflow: hidden;
  .slick-track {
    display: flex !important;
    gap: 1rem;
  }
  .slick-dots li.slick-active button::before {
    opacity: 0.75;
    color: var(--blueColor) !important;
  }
  ul.slick-dots {
    position: initial;
  }
  @media (min-width: 321px) {
    .text-title {
      font-size: 30px;
      line-height: 36px;
      margin: auto;
    }
  }
`;
