import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
import PostListItem from "./PostListItem";

const PostListBlock = styled.div`
  width: 800px;
  height: auto;
  margin: 10px auto;
  border: 1px solid #bcbcbc;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostListHead = styled.div`
  width: 97%;
  height: 50px;
  border: 1px solid #bcbcbc;
  margin: 10px auto;

  h1 {
    margin: 0;
    padding-left: 10px;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
  }
`;

const PostListBody = styled.div`
  width: 97%;
  height: auto;
  margin: 5px auto;
`;

const PostList = () => {
  const posts = useContext(PostContext);
  const { category } = useParams();

  return (
    <PostListBlock>
      <PostListHead>
        <h1>{category}</h1>
      </PostListHead>
      <PostListBody>
        {posts
          .filter((post) => post.category === category)
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <PostListItem
              key={post.id}
              id={post.id}
              category={post.category}
              title={post.title}
              date={post.date}
              place={post.place}
              gender={post.gender}
              currentPeople={post.currentPeople}
              maxPeople={post.maxPeople}
              writtenTime={post.writtenTime}
            />
          ))}
      </PostListBody>
    </PostListBlock>
  );
};

export default PostList;
