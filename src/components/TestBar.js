import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <TestBarBlock>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">PostList</Link>
      </li>
      <li>
        <Link to="/post/1">Post</Link>
      </li>
      <li>
        <Link to="/createpost">CreatePost</Link>
      </li>
    </TestBarBlock>
  );
};

export default TestBar;
