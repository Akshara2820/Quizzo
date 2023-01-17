"use client";
import { BsArrowLeft } from "react-icons/bs";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";
import { useProgress } from "../../context/context";
export default function Header() {
  const { progress } = useProgress();
  console.log(progress, "progress");
  const props = useSpring({ width: progress, config: config.slow });

  return (
    <Root>
      <div className="px-4 py-8 h-16">
        <div className="flex gap-8 items-center">
          <BsArrowLeft className="text-2xl" />
          <div className="meter">
            <animated.span style={props} />
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  button {
    height: 40px;
    padding: 0 12px;
    margin: 0 16px;
    border: none;
    border-radius: 4px;
    background-color: #a140ff;
    color: #fff;
    font-size: 1em;
    font-family: "Dank Mono";
    cursor: pointer;
    transition: background-color 0.2s linear;
  }

  button:hover {
    background: #9126f9;
  }

  .button-bar {
    margin-bottom: 24px;
  }

  .meter {
    height: 20px;
    position: relative;
    background: #d9dce5;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    width: 80vw;
  }

  .meter > span {
    height: 100%;
    border-radius: 20px;
    background-color: #a140ff;
    background-image: linear-gradient(to bottom, #7dc9df, #a140ff);
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;
