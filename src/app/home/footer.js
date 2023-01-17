import React from "react";
import { HiOutlineUser, HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsPlusSquare } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="sticky bottom-0 bg-white text-[#a29f9d] border-t-[1px]  rounded-t-2xl p-6">
      <div className="flex text-xl  justify-between items-center">
        <div className="">
          <IoHomeOutline className="ml-2" />
          <div className="text-sm">Home</div>
        </div>
        <Link href='/library'>
        <div className="">
          <HiOutlineSquares2X2 className="ml-2" />
          <div className="text-sm">Library</div>
        </div>
        </Link>
        <div className="">
          <img src="./logo.png" alt="loding..." className="w-[24px] " />

          <div className="text-sm">Join</div>
        </div>

        <Link href='image-collection'>
        <div className="">
          <BsPlusSquare className="ml-2" />
          <div className="text-sm">Create</div>
        </div>
        </Link>
        <div className="">
          <HiOutlineUser className="ml-2" />
          <div className="text-sm">Profile</div>
        </div>
      </div>
    </div>
  );
}