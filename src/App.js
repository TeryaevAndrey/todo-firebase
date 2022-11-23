import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import Auth from "./pages/Auth";

const Wrapper = styled.div`
  max-width: 410px;
  padding: 0 10px;
  margin: 0 auto;
`;

export const Btn = styled.button`
  display: inline-block;
  max-width: 305px;
  width: 100%;
  min-height: 50px;
  background-color: #6edf6c;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 35px;
`;

const App = () => {
  return (
    <div className="App">
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Wrapper>
  </div> 
  );
};

export default App;
