import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { NextIdContext } from '../context/Context';

const TestBarBlock = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid #bcbcbc;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-left: 10px;
  }
`;

const TestBar = () => {
  const categories = useFetch(`http://localhost:3002/categories`);

  return (
    <TestBarBlock>
      <li>
        <Link to="/">Home</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link to={`/${category.category}`}>{category.category}</Link>
        </li>
      ))}
      <li>
        <Link to="/createpost">CreatePost</Link>
      </li>
    </TestBarBlock>
  );
};

export default TestBar;
