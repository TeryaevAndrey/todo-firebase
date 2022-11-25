import React from 'react';
import styled from "styled-components";
import AddItem from '../components/AddItem';
import Header from "../components/Header";
import PostItem from '../components/PostItem';
import { useAuth } from '../hooks/auth.hook';

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

const Main = () => {
  const {logout} = useAuth();

  return (
    <>
     <Header title="ToDo App" back={true} backTo="/auth" onClick={() => logout()} /> 
     <ItemList>
      <AddItem />
      <PostItem title="Title" text="lorem ipsum" isDoc={false} date="22.11.2022" />
     </ItemList>
    </>
  );
};

export default Main;