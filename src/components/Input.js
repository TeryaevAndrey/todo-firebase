import React from 'react';
import styled from "styled-components";

const InputStyle = styled.input`
  max-width: 350px;
  width: 100%;
  min-height: 55px;
  background-color: #fff;
  padding: 18px 25px;
  border-bottom: 2px solid ${props => props.isReady ? "#6EDF6C" : "#E4DEDE"};
  transition: all 0.3s ease;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }
`;

const Input = ({placeholder, onChange, value}) => {
  return (
    <InputStyle isReady={value.length > 0 ? true : false} onChange={onChange} value={value} type="text" placeholder={placeholder} />
  );
};

export default Input;