import styled from "styled-components";
import clock from "./clock-outline.png";
import people from "./account-group.png";
import male from "./gender-male.png";
import female from "./gender-female.png";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { useParams } from "react-router-dom";

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

const Post = () => {
  const { id } = useParams();
  const posts = useContext(PostContext);
  const contents = posts.filter((post) => post.id === id);

  return (
    <PostBlock>
      <PostHeader>
        <UpperBox>
          <h1>{contents[0].title}</h1>
          <button>신청하기</button>
        </UpperBox>
        <UnderBox>
          <div className="item">
            <Img src={clock} />
            {contents[0].date}
          </div>
          <div className="item">
            <div>
              <Img src={male} />
              <Img src={female} />
            </div>
            {contents[0].gender}
          </div>
          <div className="item">
            <Img src={people} />
            {contents[0].current_people} / {contents[0].max_people}
          </div>
        </UnderBox>
      </PostHeader>
      <PostBody>
        <div className="map"></div>
        <div className="content">{contents[0].content}</div>
      </PostBody>
    </PostBlock>
  );
};

export default Post;
