"use client";
import React from "react";
import styled from "styled-components";

function CollectionCard({ value }) {
  return (
    <CollectionCard1>
      <div className="image">
        <img className="rounded-lg image " src={value.image} alt="logo" />
      </div>
      <div className="absolute -mt-10 text-white font-bold ml-4">
        {value.heading}
      </div>
    </CollectionCard1>
  );
}

export default CollectionCard;
const CollectionCard1 = styled.div``;
