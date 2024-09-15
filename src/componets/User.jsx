import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const User = () => {
  return (
    <StyledDiv>
      <h1>Welcome User!</h1>
      <div> create account here👇</div>
      <StyledLink to="/signIn">Sign in </StyledLink>
    </StyledDiv>
  );
};

export default User;
const StyledLink = styled(Link)`
  margin-left: 90px;
`;

const StyledDiv = styled.div`
  width: 400px;
  margin: 0 auto;
`;
