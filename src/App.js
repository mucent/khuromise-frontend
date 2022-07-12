import styled from "styled-components";
import Header from "./components/Header/Header";

const GlobalStyleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <GlobalStyleBox>
      <Header />
    </GlobalStyleBox>
  );
}

export default App;
