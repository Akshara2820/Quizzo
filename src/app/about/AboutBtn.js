"use client"
import { useTheme } from 'next-themes'
import React from "react";

export default function AboutBtn() {
    const { theme, setTheme } = useTheme()
    console.log(theme,'theme')
  return (
    <>
      <div
        onClick={() => {
          console.log("hello");
        }}
      >
        AboutBtn
      </div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </>
  );
}
