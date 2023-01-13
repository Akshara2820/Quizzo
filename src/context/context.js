"use client";
import React, { useContext, useState } from "react";

const ProgressContext = React.createContext({});

export default function ContextData(props) {
  const [progress, setProgress] = useState("25%");
  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {props.children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  return context;
};