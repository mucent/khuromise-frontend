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

const PostHeader = () => {
  return (
    <PostHeaderBlock>
      <UpperBox>
        <h1>정건 밥 먹을 사람</h1>
        <button>신청하기</button>
      </UpperBox>
      <UnderBox>
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
      </UnderBox>
    </PostHeaderBlock>
  );
};

export default PostHeader;
