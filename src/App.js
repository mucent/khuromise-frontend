import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";

const GlobalStyleBox = createGlobalStyle`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: ;
`;

function App() {
  return (
    <>
      <GlobalStyleBox />
      <Header />
    </>
  );
}

export default App;
