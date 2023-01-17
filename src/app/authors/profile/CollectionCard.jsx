"use client";
import React from "react";
import styled from "styled-components";

export default function CollectionCard({ value }) {
  return (
    <Root>
      <img className="rounded-lg h-[120px]" src={value.image} alt="logo" />
      <div className="absolute -mt-8 text-white font-bold ml-2">
        {value.heading}
      </div>
    </Root>
  );
}
const Root = styled.div`
  position: relative;
`;
