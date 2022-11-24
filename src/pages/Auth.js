import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Btn } from "../App";
import app from "../firebase";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
`;

const Auth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState(undefined);
  
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

        setIsAuth(true);
        setToken(user.accessToken);

        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("userId", user.reloadUserInfo.localId);

        navigate(`/${user.reloadUserInfo.localId}`); 

        alert("Успешно");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setIsAuth(false);
        alert(errorCode);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        token, 
        isAuth: isAuth || localStorage.getItem("token")
      }}
    >
      <Header title="Вход/Регистрация" />
      <Wrapper>
      <Input type="email" placeholder="Ваш email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <Input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} value={password} />

      <Btn onClick={signIn}>Войти</Btn>
      <Btn onClick={signUp} style={{marginTop: "10px"}}>Зарегистрироваться</Btn>
    </Wrapper>
    </AuthContext.Provider>
  );
};

export default Auth;
