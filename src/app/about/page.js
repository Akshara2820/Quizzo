import React from "react";
import AboutBtn from "./AboutBtn";

const GetSomething = async () => {
  try {
  } catch {}
};

export default function Page() {
  const res = GetSomething();

  return (
    <>
      <div className="bg-red-400">About Page</div>
      <AboutBtn />
    </>
  );
}
