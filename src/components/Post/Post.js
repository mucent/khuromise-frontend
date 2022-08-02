import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import clock from "./clock-outline.png";
import people from "./account-group.png";
import male from "./gender-male.png";
import female from "./gender-female.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import EmptyPage from "../EmptyPage";

const PostBlock = styled.div`
  width: 800px;
  height: auto;
  margin: 10px auto;
  border: 1px solid #bcbcbc;
`;

const PostHeader = styled.div`
  width: 97%;
  height: auto;
  border: 1px solid #bcbcbc;
  margin: 10px auto;
`;

const UpperBox = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    margin: 10px 20px;
    margin-bottom: 0;
    padding: 20px;
    font-size: 30px;
    line-height: 30px;
  }

  button {
    width: 70px;
    height: 40px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    margin-right: 40px;
    border: 1px solid #bcbcbc;
    border-radius: 5px;
  }
`;

const UnderBox = styled.div`
  margin: 10px auto;
  width: 600px;
  height: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .item {
    width: 200px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
`;

const PostBody = styled.div`
  width: 97%;
  height: auto;
  margin: 10px auto;

  .map {
    height: 200px;
    border: 1px solid #bcbcbc;
    margin-bottom: 10px;
  }

  .content {
    border: 1px solid #bcbcbc;
    font-size: 15px;
    padding: 25px;
  }
`;

const Buttons = styled.div`
  width: 97%;
  height: 25px;
  margin: 10px auto;
  text-align: end;

  button {
    width: 40px;
    height: 25px;
    font-size: 13px;
    text-align: center;
    line-height: 20px;
    margin-right: 5px;
    border: 1px solid #bcbcbc;
    border-radius: 5px;
  }
`;

const Post = () => {
  const { id } = useParams();
  const posts = useFetch(`http://localhost:3002/posts?id=${id}`);
  const post = { ...posts[0] };
  const date = String(post.date);
  const currentPeople = Number(post.currentPeople);
  const [_post, set_Post] = useState(post);
  const navigate = useNavigate();

  // 조건 추가하기 => 성별이 조건에 만족한다면 진행
  const applyClick = () => {
    if (window.confirm("신청하시겠습니까?")) {
      if (post.currentPeople < post.maxPeople) {
        fetch(`http://localhost:3002/posts/${post.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...post,
            currentPeople: currentPeople + 1,
          }),
        }).then((res) => {
          if (res.ok) {
            alert("신청이 완료되었습니다.");
            window.location.reload();
          }
        });
      } else {
        alert("모집 인원이 가득 찼습니다.");
        window.location.reload();
      }
    }
  };

  // 조건 추가하기 => 글쓴이만 수정 OR 삭제 가능
  const delClick = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      fetch(`http://localhost:3002/posts/${post.id}`, {
        method: "DELETE",
      }).then((res) => {
        set_Post({ id: 0 });
      });
      alert("삭제가 완료되었습니다.");
      navigate(`/${post.category}`);
    }
  };

  if (post.id === 0) {
    return null;
  }

  return (
    <>
      {post.id ? (
        <PostBlock>
          <PostHeader>
            <UpperBox>
              <h1>{post.title}</h1>
              <button onClick={applyClick}>신청하기</button>
            </UpperBox>
            <UnderBox>
              <div className="item">
                <Img src={clock} />
                {post.date
                  ? `${date.slice(0, 4)}년 ${date.slice(5, 7)}월
                  ${date.slice(8, 10)}일 ${post.noon}
                  ${post.hour}:${post.minute}`
                  : ""}
              </div>
              <div className="item">
                <div>
                  <Img src={male} />
                  <Img src={female} />
                </div>
                {post.gender}
              </div>
              <div className="item">
                <Img src={people} />
                {post.currentPeople} / {post.maxPeople}
              </div>
            </UnderBox>
          </PostHeader>
          <PostBody>
            <div className="map"></div>
            <div className="content">{post.content}</div>
          </PostBody>
          {/* 작성자만 수정 OR 삭제 가능 */}
          <Buttons>
            <button>수정</button>
            <button onClick={delClick}>삭제</button>
          </Buttons>
        </PostBlock>
      ) : (
        <EmptyPage />
      )}
    </>
  );
};

export default Post;
