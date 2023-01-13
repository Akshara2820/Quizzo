import React from "react";
import "../../styles/globals.css";
import ContextData from "../context/context";

function Layout({ children }) {
  return (
    <html>
      <head>
        <title>next13</title>
        <link href="../styles/globals.css"></link>
      </head>
      <body>
        <ContextData>
          {/*<Header /> */} 
          {children}
        </ContextData>
      </body>
    </html>
  );
}

export default Layout;
