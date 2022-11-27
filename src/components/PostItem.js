import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.28);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Text = styled.p`
  font-size: 10px;
  margin-top: 20px;
  margin-bottom: auto;
`;

const Btn = styled.button`
  width: 100%;
  min-height: 30px;
  padding: 7px 50px;
  background-color: ${props => props.isReady ? "#6EDF6C" : "#B1C6B1"};
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  border-radius: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Date = styled.span`
  display: inline-block;
  font-size: 11px;
`;

const FullLink = styled.a`
  font-size: 11px;
  color: #000;
  text-decoration: none;
`;

const PostItem = ({title, text, isDoc, isReady, date, id}) => {
  return (
    <Wrapper>
      <Header>
        <Title>
          {title}
        </Title>
      </Header>
      <Text>{text}</Text>
      {isDoc ? (
        <p style={{marginBottom: "10px"}}>+ файлы</p>
      ) : (
        ""
      )}
      
      <Btn isReady={isReady ? true : false}>{isReady ? "Завершено" : "Завершить"}</Btn>
      <Footer>
        <Date>{date}</Date>
        <FullLink as={Link} to={`/post/${id}`}>Смотреть полностью</FullLink>
      </Footer>
    </Wrapper>
  );
};

export default PostItem;