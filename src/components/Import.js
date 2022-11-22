import React from 'react';
import styled from "styled-components";
import importImg from "../images/import.svg";

const Wrapper = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #B1C6B1;
  text-align: center;
  margin-top: 5px;
`;

const Import = () => {
  return (
    <Wrapper>
      <input id="fileInput" type="file" style={{display: "none"}} />
      <label htmlFor="fileInput" style={{cursor: "pointer"}}>
        <Img src={importImg} alt="import" />
        <Text>Add Files</Text>
      </label>
    </Wrapper>
  );
};

export default Import;