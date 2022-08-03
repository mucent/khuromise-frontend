import { useParams } from "react-router-dom";
import styled from "styled-components";
import PostListItem from "./PostListItem";
import useFetch from "../../hooks/useFetch";
import EmptyPage from "../EmptyPage";

const PostListBox = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`;

const PostListBlock = styled.div`
  width: 100%;
  height: auto;
  margin: 10px auto;
  border: 1px solid #bcbcbc;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostListHead = styled.div`
  width: 95%;
  height: 50px;
  border-bottom: 1px solid #bcbcbc;
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
  width: 95%;
  height: auto;
  margin: 5px auto;
`;

const PostList = () => {
  const { category } = useParams();
  const posts = useFetch(`http://localhost:3002/posts?category=${category}`);

  if (posts[0]) {
    if (posts[0].id === 0) {
      return null;
    }
  }

  return (
    <>
      {posts[0] ? (
        <PostListBox>
          <PostListBlock>
            <PostListHead>
              <h1>{posts[0].category}</h1>
            </PostListHead>
            <PostListBody>
              {posts
                .sort((a, b) => b.id - a.id)
                .map((post) => (
                  <PostListItem
                    key={post.id}
                    id={post.id}
                    category={post.category}
                    title={post.title}
                    date={post.date}
                    noon={post.noon}
                    hour={post.hour}
                    minute={post.minute}
                    place={post.place}
                    gender={post.gender}
                    currentPeople={post.currentPeople}
                    maxPeople={post.maxPeople}
                    writtenTime={post.writtenTime}
                  />
                ))}
            </PostListBody>
          </PostListBlock>
        </PostListBox>
      ) : (
        <EmptyPage />
      )}
    </>
  );
};

export default PostList;
