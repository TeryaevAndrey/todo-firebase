import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Post from "./pages/Post";

const Wrapper = styled.div`
  max-width: 410px;
  padding: 0 10px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/edit:id" element={<Edit />}/>
          <Route path="/post:id" element={<Post />}/>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
