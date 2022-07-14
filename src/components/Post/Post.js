import styled from "styled-components";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

const PostBlock = styled.div`
  width: 800px;
  height: auto;
  margin: 10px auto;
  border: 1px solid #bcbcbc;
`;

const Post = () => {
  return (
    <PostBlock>
      <PostHeader />
      <PostBody />
    </PostBlock>
  );
};

export default Post;
