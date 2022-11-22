import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid #D9D9D9;
  font-size: 18px;
`;

const Header = ({title}) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Header;