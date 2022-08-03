import React from "react";
import styled from "styled-components";
import Post4 from "./Post4";
import Search from "./Search";
import Myprofile from "./Myprofile";

const Container = styled.div`
  width: 100%;
  height: 30rem;

  .profile {
    display: grid;
    width: 17rem;
    height: 10rem;
    border: 1px solid black;
    border-radius: 10px;

    margin: 7rem 54rem auto auto;
    padding: 3px 3px 3px 10px;
  }
`;

const Mainpage = () => {
  return (
    <div>
      <Container>
        <Post4 />
        <Search />
        <div className="profile">
          <Myprofile />
        </div>
      </Container>
    </div>
  );
};

export default Mainpage;
