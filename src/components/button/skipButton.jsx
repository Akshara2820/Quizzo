import React from 'react'
import styled from "styled-components";
export default function SkipButton() {
  return (
    <Root>
    <hr/>
      <div className="skipButton">
        <button>Skip</button>
      </div>
    </Root>
  )
}
const Root = styled.div`
/* margin: 30px 0px 0px 50px; */
  .skipButton {
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