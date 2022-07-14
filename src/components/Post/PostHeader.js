import styled from "styled-components";
import clock from "./clock-outline.png";
import people from "./account-group.png";
import male from "./gender-male.png";
import female from "./gender-female.png";

const PostHeaderBlock = styled.div`
  width: 97%;
  height: auto;
  border: 1px solid #bcbcbc;
  margin: 10px auto;

  h1 {
    margin: 0;
    margin-left: 20px;
    margin-top: 15px;
    font-size: 30px;
    line-height: 50px;
  }
`;

const Box = styled.div`
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

const PostHeader = () => {
  return (
    <PostHeaderBlock>
      <h1>정건 밥 먹을 사람</h1>
      <Box>
        <div className="item">
          <Img src={clock} />
          2022년 7월 13일 (수) 18:00
        </div>
        <div className="item">
          <div>
            <Img src={male} />
            <Img src={female} />
          </div>
          남녀무관
        </div>
        <div className="item">
          <Img src={people} />1 / 6
        </div>
      </Box>
    </PostHeaderBlock>
  );
};

export default PostHeader;
