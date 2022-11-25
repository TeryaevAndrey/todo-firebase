import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import BackImg from "../images/back.svg";

const Wrapper = styled.div`
  position: relative;
  padding: 16px 0;
  border-bottom: 1px solid #D9D9D9;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 18px;
`;

const Back = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
`;

const Header = ({title, back = false, backTo = "/", onClick}) => {
  return (
    <Wrapper>
      {
        back && (
          <Link onClick={onClick} to={backTo}>
            <Back src={BackImg} alt="back" />
          </Link>
        )
      }
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;