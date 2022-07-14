import styled from "styled-components";
import PostListItem from "./PostListItem";

const PostListBodyBlock = styled.div`
  width: 97%;
  height: auto;
  margin: 5px auto;
`;

const PostListBody = () => {
  return (
    <PostListBodyBlock>
      <PostListItem
        title="정건 밥 먹을 사람"
        date="2022년 7월 13일 (수) 18:00"
        place="정건"
        gender="남녀무관"
        participant="1 / 6"
        written_time="1시간 전"
      />
      <PostListItem
        title="중상 술 마실 사람"
        date="2022년 7월 14일 (목) 20:00"
        place="중상"
        gender="남자만"
        participant="5 / 8"
        written_time="2시간 전"
      />
      <PostListItem
        title="영통역 근처 밥"
        date="2022년 7월 15일 (금) 12:30"
        place="영통역"
        gender="여자만"
        participant="1 / 2"
        written_time="1일 전"
      />
    </PostListBodyBlock>
  );
};

export default PostListBody;
