import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "../App";
import Header from "../components/Header";
import Import from "../components/Import";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { storage } from "../firebase";
import { v4 } from "uuid";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 35px 0;
`;

const DocList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const Edit = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState({});
  const [titleValue, setTitleValue] = React.useState("");
  const [textValue, setTextValue] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [filesNames, setFilesNames] = React.useState([]);
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://todo-43aa9-default-rtdb.firebaseio.com/posts.json`)
      .then((res) => {
        Object.values(res.data).forEach((post) => {
          if (post.id === id) {
            setPost(post);

            post.files.forEach((file) => {
              setFilesNames((prev) => [...prev, file]);
            });

            setTitleValue(post.title);
            setTextValue(post.text);
          }
        });
      });
  }, [id]);

  React.useEffect(() => {
    if (filesNames) {
      filesNames.forEach(async (file) => {
        await getDownloadURL(ref(storage, `files/${file}`))
          .then((url) => {
            setLinks((prev) => [
              ...prev,
              {
                title: file,
                url: url,
              },
            ]);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [filesNames]);

  const changeTitleHandler = (e) => {
    setTitleValue(e.target.value);
  };

  const changeTextHandler = (e) => {
    setTextValue(e.target.value);
  };

  const changeFiles = (e) => {
    Array.from(e.target.files).forEach((file) => {
      setFiles((prev) => [...prev, file]);
    });
  };

  const formHandler = () => {
    try {
      if (files) {
        files.forEach((file) => {
          const storageRef = ref(storage, `files/${file.name}`);

          uploadBytes(storageRef, file).then((snapshot) => {});
        });
      }

      // axios.patch("https://todo-43aa9-default-rtdb.firebaseio.com/posts.json", {
      //   id: v4(),
      //   title: titleValue,
      //   text: textValue,
      //   date: new Date(),
      //   files: filesNames,
      //   isReady: false
      // });

      alert("Успешно");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header title="Изменение заметки" back={true} />
      <Form>
        <Input
          onChange={changeTitleHandler}
          value={titleValue}
          placeholder="Название"
        />
        <Textarea
          onChange={changeTextHandler}
          value={textValue}
          placeholder="Описание"
        />

        <DocList>
          {links.map((link) => {
            return <a href={link.url}>{link.title}</a>;
          })}
        </DocList>

        <Import onChange={changeFiles} />

        <DocList>
          {Array.from(files).map((file, index) => {
            return (
              <a href={URL.createObjectURL(file)} key={index}>
                {file.name}
              </a>
            );
          })}
        </DocList>

        <Btn onClick={formHandler}>Сохранить</Btn>
      </Form>
    </>
  );
};

export default Edit;
