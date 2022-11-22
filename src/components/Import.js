import React from 'react';
import styled from "styled-components";
import importImg from "../images/import.svg";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #B1C6B1;
  text-align: center;
`;

const Import = () => {
  return (
    <Wrapper>
      <input id="fileInput" type="file" style={{opacity: 0}} />
      <label htmlFor="fileInput">
        <Img src={importImg} alt="import" />
        span
      </label>
    </Wrapper>
  );
};

export default Import;