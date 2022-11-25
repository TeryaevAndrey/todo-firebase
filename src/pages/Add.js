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

const FileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
`;

const FileWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
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
        <Import onChange={(e) => setFileUpload((prev) => [...prev, e.target.files])} />

        <FileList>
          {
            fileUrls.map((url) => {
              return (
                <FileWrapper>
                  
                </FileWrapper>  
              )
            })
          }
        </FileList>

        <Btn onClick={formHandler}>Сохранить</Btn>
      </Form>
    </>
  );
};

export default Add;