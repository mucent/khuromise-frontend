import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import CreatePost from "./components/createpost/CreatePost";
import Login from "./components/LoginRegister/Login";
import PostList from "./components/PostList/PostList";
import TestBar from "./components/TestBar";
import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";
import { PostContextProvider } from "./context/PostContext";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #bcbcbc;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  margin: 0;
  a {
    text-decoration: none;
  }
  a:link, a:visited, a:hover, a:active {
    color: black;
  }
`;

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <TestBar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:category" element={<PostList />}></Route>
          <Route path="/:category/:id" element={<Post />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
