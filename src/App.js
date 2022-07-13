import styled from "styled-components";
import Header from "./components/Header/Header";
import PurposeList from "./components/createpost/PurposeList";
import Time from "./components/createpost/Time";
import Place from "./components/createpost/Place";
import Peoplenum from "./components/createpost/Peoplenum";
import Gender from "./components/createpost/Gender"
import PostTitle from "./components/createpost/PostTitle";
import PostContents from "./components/createpost/PostContents";

const GlobalStyleBox = styled.div`
  display: flex;
  flex-direction: column;
`;    

function App() {
  const onToggle = () => {

  }

  return (
    <>
      <div classname='Header'>
        <GlobalStyleBox>
          <Header />
        </GlobalStyleBox>
      </div>
      <div classname='CreatePost'>
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
      
    </>
    
  );
}

export default App;
