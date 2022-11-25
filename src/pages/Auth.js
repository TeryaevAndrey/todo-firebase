import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Btn } from "../App";
import app from "../firebase";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";


const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
`;

const Auth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const {login, logout} = useAuth();
  
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

  const signIn = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        login(user.accessToken, user.reloadUserInfo.localId);

        navigate(`/`); 

        alert("Успешно");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        logout();
        alert(errorCode);
      });
  }

  return (
    <>
    <Header title="Вход/Регистрация" />
      <Wrapper>
      <Input type="email" placeholder="Ваш email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <Input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} value={password} />

      <Btn onClick={signIn}>Войти</Btn>
      <Btn onClick={signUp} style={{marginTop: "10px"}}>Зарегистрироваться</Btn>
    </Wrapper>
    </>
  );
};

export default Auth;
