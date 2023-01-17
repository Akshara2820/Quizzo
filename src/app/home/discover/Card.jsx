"use client"
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Card({ value }) {
  return (
    <Root className="border">
      <div className="relative">
        <img
          src={value.url}
          alt="loding imag"
          className="h-36 object-cover w-full"
        />
        <div className="absolute top-[105px] text-sm right-1 bg-[#6949ff] text-white px-2 py-1 rounded-lg">
          {value.time}
        </div>
        <div className="p-2">
          <div className="font-bold text-lg">{value.desc}</div>
          <div className=" flex items-center gap-2 py-2">
            <div>
              <img
                src={value.userUrl}
                alt="loding imag"
                className="rounded-full w-[30px] object-cover "
              />
            </div>
            <div className="text-sm text-[#41403f]">{value.name}</div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.div`
  width: 200px;
  box-shadow: #eeeeee 0px 5px 0px;
  margin: 25px 0px;
  border-radius: 20px;
  font-weight: 600;
  overflow: hidden;
`;
