import React from "react";
import "../../styles/globals.css";
import ContextData from "../context/context";

function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Quizzo</title>
        <link href="../styles/globals.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com/%22/%3E"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"/>
        
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
