import React from "react";
import styled from "styled-components";
import { Btn } from "../App";
import Header from "../components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`;

const DocList = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Post = ({ title, text, docs }) => {
  return (
    <>
      <Header back={true} />
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>

        <DocList>

        </DocList>

        <Btn style={{backgroundColor: "#6EDF6C"}}>Изменить</Btn>
        <Btn style={{backgroundColor: "#CB0404", marginTop: "10px"}}>Удалить</Btn>
      </Wrapper>
    </>
  );
};

export default Post;
