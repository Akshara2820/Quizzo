"use client";
import { useProgress } from "../../context/context";
import Header from "../header";
import React, { useState } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'

export default function SignupDetail() {
  const { setProgress } = useProgress();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [openModel, setOpenModel] = useState(false);

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = () => {
    setOpenModel(true);
  };

  return (
    <>
      <Header />
      <LoginPage1>
        <div>
          <div>
            <div className="m-4 text-2xl text-center font-bold">
              Create an account ✏️
            </div>
            <div className="text-sm py-2 text-[#212121] text-center">
              Please enter your username. email address and password. If you
              forget it, then you have to do forgot password.
            </div>
          </div>
          <div className="mt-10">
            <p className="">User Name</p>
            <input
              className="input"
              id="message"
              name="message"
              type="text"
              placeholder="enter your userName"
            />
          </div>
          <div className="mt-6">
            <p>Password</p>
            <input
              className="input"
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              placeholder="Password"
            />
            <div className="eyeIcon" onClick={togglePassword}>
              {passwordType === "password" ? (
                <AiFillEyeInvisible />
              ) : (
                <AiFillEye />
              )}
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <input className="checkbox" type="checkbox" />
            <p>Remember me</p>
          </div>

          <div className="flex items-center gap-2 mx-4">
            <div className="my-6 h-[1px] bg-[#efefef] w-full"></div>
            <div className="font-bold"> or</div>
            <div className="my-6 h-[1px] bg-[#efefef] w-full"></div>
          </div>
          <div className="googleButton">
            <FcGoogle className="text-2xl" />
            <button>Continue with Google</button>
          </div>
          <div className="googleButton">
            <BsGithub className="text-2xl" />
            <button>Continue with Google</button>
          </div>


          <hr className="mt-6" />
          <Link href="./login/forgot">
            <div className="font-bold text-[14px] text-center mt-6 text-[#795cff]">
              Forgot Password?
            </div>
          </Link>
          <div className="sign-up" onClick={() => {handleSubmit();setProgress("100%")}}>
            <button >Sign In</button>
          </div>

          {openModel ? (
            <>
              <div className="left-0 h-[100%] absolute z-10 w-[100%] top-0 bg-[#000000ad]">
                <div className=" bg-white p-4 modelBox zoom-in-zoom-out">
                  <div className="border rounded-full w-24 h-24 p-4 bg-[#795cff] mx-auto">
                    <div className="bg-white rounded-md mt-4 m-auto  w-8 h-8 ">
                      <div className="py-2">
                        <FaUser className="mx-auto text-center text-[#795cff]" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 text-[20px] text-[#795cff] ">
                  Successful!
                  </div>
                  <p className="text-[14px] text-center mt-2">
                    Please wait a moment, we are preparing for you...
                  </p>
                  <Link href='/'><div className="sign-up">
                    <button>Go to Home</button>
                  </div> </Link>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </LoginPage1>
    </>
  );
}
const LoginPage1 = styled.div`
.googleButton {
    box-shadow: #efefef 0px 5px 1px;
    margin: 30px 20px 10px 20px;
    border-radius: 10px;
    border: 1px solid #efefef;
    padding: 15px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

.circle {
    background-color: var(--blueColor);
    padding: 40px 50px;
    border-radius: 50%;
    margin-left: 45px;
    box-shadow: #543acc 10px 10px 40px;
  }
  .modelBox {
    position: absolute;
    border-radius: 20px;
    left: 20%;
    top: 20%;
    transform: translate(-50% -50%);
  }
  .zoom-in-zoom-out {
    width: 60%;
    height: 50%;
    animation: zoom-in-zoom-out 2s ease-out infinite;
  }
  /* infinite */

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  .sign-up {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin: 55px 20px;
    border-radius: 50px;
    padding: 10px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
  }

  input[type="checkbox"] {
    accent-color: var(--blueColor);
  }
  .input {
    border: 2px solid var(--blueColor);
    padding: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    outline: none;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  .eyeIcon {
    position: absolute;
    z-index: 10;
    margin-top: -30px;
    right: 0;
    margin-right: 30px;
    color: var(--blueColor);
  }
`;
