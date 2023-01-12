"use client";
import React, { useState, useForm } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";
import { toast, Toaster } from "react-hot-toast";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";

function ForgotPage() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [cpasswordInput, setCPasswordInput] = useState("");
  const [cpasswordType, setCPasswordType] = useState("password");
  const [openModel, setOpenModel] = useState(false);

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const handleCPasswordChange = (evnt) => {
    setCPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const toggleCPassword = () => {
    if (cpasswordType === "password") {
      setCPasswordType("text");
      return;
    }
    setCPasswordType("password");
  };

  const handleSubmit = () => {
    if (passwordInput != cpasswordInput) {
      return toast.error("Invalid password");
    } else {
      setOpenModel(true);
      return null;
    }
  };

  return (
    <ForgotPage1>
      <div>
       <Link href='/login'> <HiOutlineArrowLeft className="text-[20px]" /></Link>
        <div>
          <h3 className="mt-6 text-[24px] font-semibold">
            Create New Password 🔐
          </h3>
          <p className="mt-4 text-[15px]">
            Save the new password in a safe place, if you forgot it then you
            have to do a forgot password again.
          </p>

          <div className="mt-6">
            <p>Create a New Password</p>
            <input
              className="input"
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              class="form-control"
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

          <div className="mt-6">
            <p>Confirm a New Password</p>
            <input
              className="input"
              type={cpasswordType}
              onChange={handleCPasswordChange}
              value={cpasswordInput}
              name="password"
              class="form-control"
              placeholder="Password"
            />
            <div className="eyeIcon" onClick={toggleCPassword}>
              {cpasswordType === "password" ? (
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
        </div>

        <hr className="mt-6" />
        <div className="sign-up">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Continue
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        {openModel ? (
          <>
            <div className="left-0 h-[100%] absolute z-10 w-[100%] top-0 bg-[#000000ad]">
              <div className=" bg-white p-4 modelBox zoom-in-zoom-out">
                <div className="border rounded-full w-24 h-24 p-4 bg-[#795cff] mx-auto">
                  <div className="bg-white rounded-md mt-4 m-auto  w-8 h-8 ">
                    <div className="py-2">
                      <BsCheckLg className="mx-auto text-center text-[#795cff]" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-[20px] text-[#795cff] ">
                  Welcome Back!
                </div>
                <p className="text-[14px] text-center mt-2">
                  You have successfully reset and created a new password.
                </p>
                <div className="sign-up">
                  <button>Go to Home</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </ForgotPage1>
  );
}

export default ForgotPage;
const ForgotPage1 = styled.div`
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
  .eyeIcon {
    position: absolute;
    z-index: 10;
    margin-top: -30px;
    right: 0;
    margin-right: 30px;
    color: var(--blueColor);
  }
`;
