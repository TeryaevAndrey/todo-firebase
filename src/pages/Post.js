import axios from "axios";
import { getDownloadURL, ref } from "firebase/storage";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "../App";
import Header from "../components/Header";
import { database, storage } from "../firebase";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  max-width: 305px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  width: 100%;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  width: 100%;
`;

const DocList = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Post = () => {
  const {id} = useParams();
  const [post, setPost] = React.useState({});
  const [filesNames, setFilesNames] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://todo-43aa9-default-rtdb.firebaseio.com/posts.json`).then(res => {
      Object.values(res.data).forEach(post => {
        if(post.id === id) {
          setPost(post);

          post.files.forEach(file => {
            setFilesNames(prev => [...prev, file]);
          });
        }
      })
    });
  }, []);

  getDownloadURL(ref(storage, "files/математика 25.11.docx"))
    .then(url => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = event => {
        const blob = xhr.response;
      };

      xhr.open("GET", url);
      xhr.send();

      console.log(url);
    }).catch(err => {
      
    });

  return (
    <>
      <Header back={true} />
      <Wrapper>
        <Title>{post.title}</Title>
        <Text>{post.text}</Text>

        <DocList>

        </DocList>

        <Btn style={{backgroundColor: "#6EDF6C"}}>Изменить</Btn>
        <Btn style={{backgroundColor: "#CB0404", marginTop: "10px"}}>Удалить</Btn>
      </Wrapper>
    </>
  );
};

export default Post;
