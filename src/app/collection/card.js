"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

function CollectionCard({ value }) {
  const router = useRouter();
  return (
    <CollectionCard1
      onClick={() => {
        router.push(`${value.link_}?id=${value.id}`);
      }}
    >
      <img className="rounded-lg h-[120px] " src={value.image} alt="logo" />

      <div className="absolute -mt-8  text-white font-bold ml-2">
        {value.heading}
      </div>
    </CollectionCard1>
  );
}

export default CollectionCard;
const CollectionCard1 = styled.div`
  position: relative;
`;

