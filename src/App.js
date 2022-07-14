import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import PurposeList from "./components/createpost/PurposeList";
import Time from "./components/createpost/Time";
import Place from "./components/createpost/Place";
import Peoplenum from "./components/createpost/Peoplenum";
import Gender from "./components/createpost/Gender";
import PostTitle from "./components/createpost/PostTitle";
import PostContents from "./components/createpost/PostContents";
import Login from "./components/LoginRegister/Login";
import PostListTemplate from "./components/PostList/PostListTemplate";
import TestBar from "./components/TestBar";
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
        <Route path="/post" element={<PostListTemplate />}></Route>
      </Routes>
      <div classname="CreatePost">
        <div>
          <PurposeList />
        </div>
        <div>
          <Time />
        </div>
        <div>
          <Place />
        </div>
        <div>
          <Peoplenum />
        </div>
        <div>
          <Gender />
        </div>
        <div>
          <PostTitle />
        </div>
        <div>
          <PostContents />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
