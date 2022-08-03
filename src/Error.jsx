import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./style/Button";

const Error = () => {
  return (
    <Binding>
      <img src="Error2.png" />
      <NavLink to="/">
      <Button>Go Back To Home</Button>
      </NavLink>
    </Binding>
  );
};

const Binding = styled.section`
  padding:1rem 0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

export default Error;
