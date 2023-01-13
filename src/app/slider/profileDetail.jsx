"use client";
import { useProgress } from "../../context/context";
import Header from "../header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";

export default function ProfileDetail() {
  const { setProgress } = useProgress();
  const [DOB, setDOB] = useState("dob");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (DOB === "dob") {
      setDOB("text");
      return;
    }
    setDOB("dob");
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setName(event.target.value);
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
              Please complete your profile. Don't worry, your data will remain
              private and only you can see it.
            </div>
          </div>
          <div className="mt-10">
            <p>Full Name</p>
            <input
              className="input"
              id="message"
              name="message"
              value={name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-10">
            <p>Date of Birth</p>
            <input
              className="input"
              id="message"
              name="message"
              type="date"
              placeholder="Enter Your DOB"
            />
          </div>
          <div className="mt-10">
            <p>Phone Number</p>
            <input
              className="input"
              id="message"
              name="message"
              type="text"
              placeholder="Enter Your Phone No."
            />
          </div>
          <div className="mt-10">
            <p>Country</p>
            <input
              className="input"
              id="message"
              name="message"
              type="text"
              placeholder="Enter Your Country"
            />
          </div>

          <div className="flex gap-2 items-center mt-4">
            <input className="checkbox" type="checkbox" />
            <p>Remember me</p>
          </div>
          <hr className="mt-6" />

          <div className="sign-up" onClick={() => setProgress("100%")}>
            <button>Sign In</button>
          </div>
        </div>
      </LoginPage1>
    </>
  );
}

const LoginPage1 = styled.div`
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
  input[type="date"]::-webkit-calendar-picker-indicator{
    /* background: var(--blueColor); */
    /* accent-color: var(--blueColor); */
    
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
    font-size: 14px;
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
