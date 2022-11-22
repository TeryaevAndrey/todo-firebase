import React from 'react';
import styled from "styled-components";
import { Btn } from '../App';
import Header from '../components/Header';
import Import from '../components/Import';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const Add = () => {
  const [titleValue, setTitleValue] = React.useState("");
  const [textValue, setTextValue] = React.useState("");

  const changeTitleHandler = (e) => {
    setTitleValue(e.target.value);
  }

  const changeTextHandler = (e) => {
    setTextValue(e.target.value);
  }

  return (
    <>
      <Header title="Добавление заметки" back={true} />
      <Form>
        <Input onChange={changeTitleHandler} value={titleValue} placeholder="Название" />
        <Textarea onChange={changeTextHandler} value={textValue} placeholder="Описание" />
        <Import />

        <Btn>Сохранить</Btn>
      </Form>
    </>
  );
};

export default Add;