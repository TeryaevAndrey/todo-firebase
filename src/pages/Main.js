import React from 'react';
import styled from "styled-components";
import AddItem from '../components/AddItem';
import Header from "../components/Header";
import PostItem from '../components/PostItem';

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

const Main = () => {
  return (
    <>
     <Header title="ToDo App" /> 
     <ItemList>
      <AddItem />
      <PostItem title="Title" text="lorem ipsum" isDoc={false} date="22.11.2022" />
     </ItemList>
    </>
  );
};

export default Main;