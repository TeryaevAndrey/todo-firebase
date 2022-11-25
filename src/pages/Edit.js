import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import { Btn } from '../App';
import Header from '../components/Header';
import Import from '../components/Import';
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 35px 0;
`;  

const Edit = ({title, text, files}) => {
  const [titleValue, setTitleValue] = React.useState("");
  const [textValue, setTextValue] = React.useState("");

  if(title) {
    setTitleValue(title)
  }

  if(text) {
    setTextValue(text);
  }
  
  const changeTitleHandler = (e) => {
    setTitleValue(e.target.value);
  }

  const changeTextHandler = (e) => {
    setTextValue(e.target.value);
  }

  return (
    <>
      <Header title="Изменение заметки" back={true} />
      <Form>
        <Input onChange={changeTitleHandler} value={titleValue} placeholder="Название" />
        <Textarea onChange={changeTextHandler} value={textValue} placeholder="Описание" />

        <Import />

        <Btn>Сохранить</Btn>
      </Form>
    </>
  );
};

export default Edit;