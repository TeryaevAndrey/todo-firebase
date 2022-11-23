import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Btn } from "../App";
import app from "../firebase";
import Header from "../components/Header";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
`;

const Auth = () => {
  const auth = getAuth(app);
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Аккаунт успешно создан")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  return (
    <>
      <Header title="Вход/Регистрация" />
      <Wrapper>
      <Input type="email" placeholder="Ваш email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <Input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} value={password} />

      <Btn>Войти</Btn>
      <Btn onClick={signUp} style={{marginTop: "10px"}}>Зарегистрироваться</Btn>
    </Wrapper>
    </>
  );
};

export default Auth;
