import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Container1 = styled.div`
  display: grid;
  width: 40rem;
  height: 30rem;
  grid-template-rows: repeat(2, 12rem);
  grid-template-columns: repeat(2, 21rem);
  margin: 60px 30px 20px 30rem;
  border: 1px white;
  border-radius: 5px;
  p {
    padding: 2rem;
  }
  grid-gap: 30px;
  
  .post1:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
    border: 1.5px solid black;
    border-radius: 3px;
    padding: 4px;

    .postlist1 {
      display: grid;
      margin: 7px;
      border: 1px solid black;
      border-radius: 4px;
      width: 19.2rem;
      height: 8.5rem;
    }
  }
  .post2:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
    border: 1.5px solid black;
    border-radius: 3px;
    padding: 4px;

    .postlist2 {
      display: grid;
      margin: 7px;
      border: 1px solid black;
      border-radius: 4px;
      width: 19.2rem;
      height: 8.5rem;
    }
  }
  .post3:nth-child(3) {
    grid-column: 1/2;
    grid-row: 2/3;
    border: 1.5px solid black;
    border-radius: 3px;
    padding: 4px;

    .postlist3 {
      display: grid;
      margin: 7px;
      border: 1px solid black;
      border-radius: 4px;
      width: 19.2rem;
      height: 8.5rem;
    }
  }

  .post4:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/3;
    border: 1.5px solid black;
    border-radius: 3px;
    padding: 4px;

    .postlist4 {
      display: grid;
      margin: 7px;
      border: 1px solid black;
      border-radius: 4px;
      width: 19.2rem;
      height: 8.5rem;
    }
  }
`
//게시글 목록 띄우기//

const StyleButton = styled.button`
    display: inline-flex;
    color : black;
    font-weight: Bold;
    outline: none;
    border: 1px solid black;
    border-radius: 7px;
    cursor: Pointer;

    height: 2rem;
    width: 20rem;
    font-size: 1.1rem;
    text-align: center;

    background-color: white;

    &:active,
    &:hover
`;


const Post4 =()=> {
  const categories = useFetch(`http://localhost:3002/categories`);

  return (
    <Container1>
      {categories.map((category) => (
        <StyleButton key={category.id}>
          <Link to={`/${category.category}`}>{category.category}</Link>
        </StyleButton>
      ))}
    </Container1>
  )
}

export default Post4;