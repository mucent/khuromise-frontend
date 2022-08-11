import styled from "styled-components";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { render } from "@testing-library/react";

const CommentItemBox = styled.div`
  width: 97%;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid #bcbcbc;
  border-radius: 6px;
  display: flex;
  padding: 10px;

  .userId {
    width: 70px;
    height: auto;
    margin-top: 10px;
  }

  .comment {
    width: 90%;
    height: auto;
    margin: 10px 0;
  }

  .delBtn {
    width: 40px;
    height: 20px;
    font-size: 8px;
    border: none;
    background-color: transparent;
    color: #ababab;
  }
`;

const CommentItem = ({ comment }) => {
  const [_comment, set_Comment] = useState(comment);
  console.log(comment);

  const users = useFetch(`http://localhost:3002/users`);
  const findUsers = [...users];
  const findUser =
    findUsers.find(
      (user) => user.userId === sessionStorage.getItem("LoginUserInfo")
    ) || {};

  const delComment = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      fetch(`http://localhost:3002/comments/${comment.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        set_Comment({ id: 0 });
      });
      alert("삭제가 완료되었습니다.");
      window.location.reload();
    }
  };
  // const delComment = () => {
  //   if (window.confirm("정말로 삭제하시겠습니까?")) {
  //     fetch(`http://localhost:3002/comments/${comment.id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({}),
  //     });
  //     alert("삭제가 완료되었습니다.");
  //     window.location.reload();
  //   }
  // };

  if (!comment || comment.id === 0) {
    return null;
  }
  return (
    <CommentItemBox>
      <div className="userId">{comment.writerName}</div>
      <div className="comment">{comment.comment}</div>
      {findUser.userId === comment.writerId && (
        <button className="delBtn" onClick={delComment}>
          삭제
        </button>
      )}
    </CommentItemBox>
  );
};

export default CommentItem;
