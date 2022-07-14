import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import CreatePost from "./components/createpost/CreatePost";
import Login from "./components/LoginRegister/Login";
import PostList from "./components/PostList/PostList";
import TestBar from "./components/TestBar";
import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";

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
        <Route path="/post" element={<PostList />}></Route>
        <Route path="/post/1" element={<Post />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
