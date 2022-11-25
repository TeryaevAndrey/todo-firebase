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
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
`;

const Add = () => {
  const [titleValue, setTitleValue] = React.useState("");
  const [textValue, setTextValue] = React.useState("");
  const [files, setFiles] = React.useState([]);

  const changeTitleHandler = (e) => {
    setTitleValue(e.target.value);
  }

  const changeTextHandler = (e) => {
    setTextValue(e.target.value);
  }

  const changeFiles = (e) => {
    Array.from(e.target.files).forEach(file => {
      setFiles(prev => [...prev, file]);
    });
  }

  return (
    <>
      <Header title="Добавление заметки" back={true} />
      <Form>
        <Input onChange={changeTitleHandler} value={titleValue} placeholder="Название" />
        <Textarea onChange={changeTextHandler} value={textValue} placeholder="Описание" />
        <Import onChange={changeFiles}/>

        <FileList>
          {
            Array.from(files).map((file, index) => {
              return <a href={URL.createObjectURL(file)} key={index} >{file.name}</a>
            })
          }
        </FileList>

        <Btn>Сохранить</Btn>
      </Form>
    </>
  );
};

export default Add;