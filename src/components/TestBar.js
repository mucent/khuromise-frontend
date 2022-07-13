import { Link } from "react-router-dom";
import styled from "styled-components";

const TestBarBlock = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-left: 10px;
  }
`;

const TestBar = () => {
  return (
    <TestBarBlock>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">PostList</Link>
      </li>
    </TestBarBlock>
  );
};

export default TestBar;
