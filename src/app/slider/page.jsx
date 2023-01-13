"use client";
import React, { useEffect } from "react";
import { useProgress } from "../../context/context";
import ProfileDetail from "./profileDetail";
import SignupDetail from "./signupDetail";
import TypeAccount from "./typeAccount";
import WorkPlace from "./workPlace";
export default function SliderPage() {
  const { progress } = useProgress();
  return (
    <div>
      {progress == "50%" ? (
        <WorkPlace />
      ) : progress == "75%" ? (
        <ProfileDetail />
      ) : progress == "100%" ? (
        <SignupDetail />
      ) : (
        <TypeAccount />
      )}
    </div>
  );
}
