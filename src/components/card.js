import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background: crimson;
  border: solid thick grey;
  border-radius: 8px;
`;

const Card = (props) => {
  return (
    <StyledDiv>
      <h1>This is the standard component header</h1>
      {props.childen}
    </StyledDiv>
  )
} 

export default Card;