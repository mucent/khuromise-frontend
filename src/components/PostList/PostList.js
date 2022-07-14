import styled from "styled-components";
import PostListBody from "./PostListBody";
import PostListHeader from "./PostListHeader";

const PostListBlock = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid #bcbcbc;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostList = () => {
  return (
    <PostListBlock>
      <PostListHeader />
      <PostListBody />
    </PostListBlock>
  );
};

export default PostList;
