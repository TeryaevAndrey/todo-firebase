import React from 'react';
import styled from "styled-components";

const TextareaStyle = styled.textarea`
  max-width: 350px;
  width: 100%;
  min-height: 190px;
  background-color: #fff;
  border-bottom: 2px solid ${props => props.isReady ? "#6EDF6C" : "#E4DEDE"};
  padding: 18px 25px;
  font-size: 16px;
  resize: none;
  transition: all 0.3s ease;

  &::placeholder {
    font-size: 16px;
  }
`;

const Textarea = ({onChange, value, placeholder}) => {
  return (
    <TextareaStyle isReady={value.length > 0 ? true : false} onChange={onChange} value={value} placeholder={placeholder} />
  );
};

export default Textarea;