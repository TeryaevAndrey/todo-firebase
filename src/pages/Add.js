import { ref, uploadBytes } from 'firebase/storage';
import React from 'react';
import styled from "styled-components";
import { Btn } from '../App';
import Header from '../components/Header';
import Import from '../components/Import';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import { storage } from '../firebase';
import { v4 } from 'uuid';
import axios from 'axios';

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
  const [filesNames, setFilesNames] = React.useState([]);

  React.useEffect(() => {
    files.forEach(file => {
      setFilesNames(prev => [...prev, file.name]);
    });
  }, [files]);

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

  const formHandler = (postId, title, text, files, date) => {
    try {
      if(files) {
        files.forEach(file => {
          const storageRef = ref(storage, `files/${file.name}`);
  
          uploadBytes(storageRef, file).then((snapshot) => {
          })
        });
      }

      axios.post("https://todo-43aa9-default-rtdb.firebaseio.com/posts.json", {
        id: v4(),
        title: titleValue,
        text: textValue,
        date: new Date(),
        files: filesNames,
        isReady: false
      });

      alert("Успешно");
    } catch(err) {
      console.log(err);
    }
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

        <Btn onClick={formHandler}>Сохранить</Btn>
      </Form>
    </>
  );
};

export default Add;