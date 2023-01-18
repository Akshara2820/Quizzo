"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

function CreateQuizzo() {
  const [file, setFile] = useState();
  const handelFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <CreateQuizzo1>
      <div className="flex items-center gap-4 header">
        <Link href="/home">
          <div>
            <IoClose className="text-2xl" />
          </div>
        </Link>
        <div className="font-bold text-[20px]">Create Quizzo</div>
      </div>

      <div className="border-2 mt-10 border-[#8166ff] overflow-hidden  rounded-2xl h-60 relative">
        <label onChange={handelFile} htmlFor="formId">
          <input type="file" id="formId" hidden />
          <div className="text-[#8166ff] text-[30px] flex justify-center mt-24">
            <BsImageFill onChange={handelFile} />
          </div>
          <p className="text-[#8166ff] text-center mt-4 font-bold text-[18px]">
            Add Cover Image
          </p>
        </label>

        <img className="h-60 card-image" src={file} />
      </div>

      <div className="mt-10">
        <p>Title</p>
        <input
          className="input font-bold"
          id="message"
          name="message"
          type="text"
          placeholder="enter your email address"
        />
      </div>

      <div className="mt-10">
        <p>Description</p>
        <input
          className="input font-bold"
          id="message"
          name="message"
          type="text"
          placeholder="enter your email address"
        />
      </div>
      <div className="mt-10">
        <p>Select Collection</p>
        <select className="font-bold">
          <option>Eduction</option>
          <option>Food</option>
          <option>Music</option>
          <option>Saving</option>
          <option>Business</option>
          <option>Motivation</option>
        </select>
      </div>

      <div className="mt-10">
        <p>Select Theme</p>
        <select className="font-bold">
          <option>Quizoo Default</option>
          <option>None</option>
        </select>
      </div>

      <div className="mt-10">
        <p>Visible to</p>
        <select className="font-bold">
          <option>Only Me</option>
          <option>Friends of Friends</option>
          <option>Public</option>
        </select>
      </div>

      <div className="mt-10">
        <p>Visible to Quiz Questions</p>
        <select className="font-bold">
          <option>Only Me</option>
          <option>Friends of Friends</option>
          <option>Public</option>
        </select>
      </div>

      <div className="mt-10">
        <p>Keywords</p>
        <input
          className="input font-bold"
          id="message"
          name="message"
          type="text"
          placeholder="Type Keyword and enter ex: learning games"
        />
      </div>

      <div className="flex items-center justify-center">
      <Link href="/home">
        <div className="saveBtn">
          <button>Save</button>
        </div>
      </Link>

      <Link href="/home">
        <div className="createBtn">
          <button>Add Question</button>
        </div>
      </Link>
      </div>
    </CreateQuizzo1>
  );
}

export default CreateQuizzo;
const CreateQuizzo1 = styled.div`
  padding-bottom: 60px;
  .card-image {
    width: 350px;
    position: absolute;
    left: 0px;
    top: -3px;
    z-index: -10;
  }

  .createBtn {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin: 55px 20px;
    border-radius: 50px;
    padding: 10px ;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
  }
  .saveBtn{
    background-color:#f0edff;
    box-shadow: #c4b7ff 0px 5px 0px;
    margin: 55px 20px;
    border-radius: 50px;
    padding: 10px 40px;
    color: var(--blueColor);
    text-align: center;
    font-weight: 600;
  }
  .header {
    position: sticky;
    top: 0px;
    background: white;
    z-index: 10;
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
  select {
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
    font-weight: 700;
  }
`;
