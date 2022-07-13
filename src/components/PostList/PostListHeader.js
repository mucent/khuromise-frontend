import styled from "styled-components";

const PostListHeadBlock = styled.div`
  width: 97%;
  height: 50px;
  border: 1px solid #bcbcbc;
  margin: 10px auto;

  h1 {
    margin: 0;
    margin-left: 5px;
    font-size: 26px;
    font-weight: bold;
    line-height: 50px;
  }
`;

const PostListHeader = () => {
  return (
    <PostListHeadBlock>
      <h1>카테고리 이름</h1>
    </PostListHeadBlock>
  );
};

export default PostListHeader;
