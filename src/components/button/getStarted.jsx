import React from "react";
import styled from "styled-components";
import Link from 'next/link'
export default function GetStarted() {
  return (
    <Root>
      <hr />
      <Link href="/slider">
        <div className="getButton">
          <button>GET STARTED</button>
        </div>
      </Link>
      <Link href="/login">
      <div className="haveAccountButton">
        <button>I ALREADY HAVE AN ACCOUNT</button>
      </div>
      </Link>
    </Root>
  );
}
const Root = styled.div`
  margin: 50px 0px 0px 0px;
  .getButton {
    background-color: var(--blueColor);
    box-shadow: #543acc 0px 5px 0px;
    margin: 25px 20px;
    border-radius: 50px;
    padding: 10px 12px;
    color: var(--whiteColor);
    text-align: center;
    font-weight: 600;
  }
  .haveAccountButton {
    background-color: var(--lightPurple);
    box-shadow: #c4b7ff 0px 5px 0px;
    margin: 25px 20px;
    border-radius: 50px;
    padding: 10px 12px;
    color: #6949ff;
    text-align: center;
    font-weight: 600;
  }
`;
