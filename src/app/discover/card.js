import React from "react";
import styled from "styled-components";

function DiscoverCard({ value }) {
  return (
    <DiscoverCard1>
      <div className="border border-gray-200 rounded-lg  mt-4 h-28 overflow-hidden">
        <div className="flex gap-4 items-center">
          <div>
            <img className="w-40 h-28" src={value.image} alt="logo" />
            <div className="absolute ml-14 -mt-8 bg-indigo-700 text-white text-[14px] rounded-md px-1">
              {value.time}
            </div>
          </div>
          <div>
            <div className="font-bold text-[20px] heading ">
              {value.heading}
            </div>
            <div className="flex items-center gap-4 text-[14px] opacity-70">
              <div>{value.month}</div>
              <div> &#8226; {value.play}</div>
            </div>
            <div className="flex gap-4 items-center">
              <img className="w-8 rounded-full" src={value.avtar} alt="logo" />
              <div className="text-[14px] font-bold">{value.name}</div>
            </div>
          </div>
        </div>
      </div>
    </DiscoverCard1>
  );
}

export default DiscoverCard;
const DiscoverCard1 = styled.div`

  .heading {
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`;
