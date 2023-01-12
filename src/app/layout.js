import React from "react";
import styled from "styled-components";
import Header from "./header";

import "../../styles/globals.css";
function Layout({ children }) {
  return (
    <html>
      <head>
        <title>next13</title>
        <link href="../styles/globals.css"></link>
      </head>
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}

export default Layout;


