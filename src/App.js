import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import Login from "./components/LoginRegister/Login";
import PostListTemplate from "./components/PostList/PostListTemplate";
import TestBar from "./components/TestBar";

const GlobalStyle = createGlobalStyle`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  margin: 0;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <TestBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post" element={<PostListTemplate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
