import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import addImg from "../images/plus.svg";

const Wrapper = styled.a`
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
`;

const AddImg = styled.img`
  width: 45px;
  height: 45px;
`;

const AddItem = () => {
  return (
    <Wrapper as={Link} to="/edit">
      <AddImg src={addImg} alt="add" />
    </Wrapper>
  );
};

export default AddItem;