import axios from "axios";
import { getDownloadURL, ref } from "firebase/storage";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "../App";
import Header from "../components/Header";
import {storage } from "../firebase";

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
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const Post = () => {
  const {id} = useParams();
  const [post, setPost] = React.useState({});
  const [filesNames, setFilesNames] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get(`https://todo-43aa9-default-rtdb.firebaseio.com/posts.json`).then( res => {
      Object.values(res.data).forEach(post => {
        if(post.id === id) {
          setPost(post);

          post.files.forEach(file => {
            setFilesNames(prev => [...prev, file]);
          });
        }
      })
    });
  }, [id]);

  React.useEffect(() => {
    if(filesNames) {
      filesNames.forEach(async file => {
        await getDownloadURL(ref(storage, `files/${file}`))
      .then(url => {
        setLinks(prev => [...prev, {
          title: file,
          url: url
        }]);
      })
      .catch((err) => {
        console.log(err);
      });
      })
    }
  }, [filesNames]);

  const editBtnHandler = (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <>
      <Header back={true} />
      <Wrapper>
        <Title>{post.title}</Title>
        <Text>{post.text}</Text>

        <DocList>
          {
            links.map((link, index) => {
              return <a href={link.url} key={index}>{link.title}</a>
            })
          }
        </DocList>

        <Btn onClick={() => editBtnHandler(post.id)} style={{backgroundColor: "#6EDF6C"}}>Изменить</Btn>
        <Btn style={{backgroundColor: "#CB0404", marginTop: "10px"}}>Удалить</Btn>
      </Wrapper>
    </>
  );
};

export default Post;
