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
        <div className="absolute top-[105px] left-1 font-bold text-xl text-white px-2 py-1 rounded-lg">
          {value.name}
        </div>
      </div>
    </Root>
  );
}
const Root = styled.div`
  width: 220px;
  margin: 25px 0px;
  border-radius: 20px;
  font-weight: 600;
  overflow: hidden;
`;
