import axios from "axios";
import React from "react";
import styled from "styled-components";
import AddItem from "../components/AddItem";
import Header from "../components/Header";
import PostItem from "../components/PostItem";
import { useAuth } from "../hooks/auth.hook";

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

const Main = () => {
  const { logout } = useAuth();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://todo-43aa9-default-rtdb.firebaseio.com/posts.json")
      .then((res) => {
        setPosts(Object.values(res.data));
      });
  }, []);

  return (
    <>
      <Header
        title="ToDo App"
        back={true}
        backTo="/auth"
        onClick={() => logout()}
      />
      <ItemList>
        <AddItem />
        {Array.from(posts).map((post) => {
          return (
            <PostItem
              title={post.title}
              text={post.text}
              isDoc={post.files ? true : false}
              date={new Date(post.date).toLocaleDateString()}
              key={post.id}
              id={post.id}
            />
          );
        })}
      </ItemList>
    </>
  );
};

export default Main;
