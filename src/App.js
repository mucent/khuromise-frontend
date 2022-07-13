import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import PostListTemplate from "./components/PostList/PostListTemplate";

const GlobalStyle = createGlobalStyle`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  margin: 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PostListTemplate />
    </>
  );
}

export default App;
