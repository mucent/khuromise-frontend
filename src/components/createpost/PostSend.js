import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

const PostBox = styled.div`
  
`;

function PostSend({ titlevalue , contentvalue }) {

  const posts = useFetch("http://localhost:3002/posts")

  function onSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3002/posts", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        "id" : 3,
        "name" : "익명",
        "userGender" : "w",
        "date" : "2022.07.19.",
        "hour" : 13,
        "minute" : 30,
        "purpose" : "meal",
        "gender" : "w",
        "peopleNum" : 3,
        "title" : titlevalue,
        "content" : contentvalue
      }),
    }).then(res =>{
      if (res.ok){
        alert("생성이 완료되었습니다");
      }
    });
  }
  
  return(
      <form onSubmit = {onSubmit}>
        <button>등록</button>
      </form>
  );
}
export default PostSend;