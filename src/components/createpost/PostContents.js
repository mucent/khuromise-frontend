import React, {useState} from 'react';
import styled from 'styled-components';

const PostBox = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content : center;
`;

function PostContents() {

  const [hei, setHei] = useState("375");

  function size(e) {
    e.target.style.height = "1px";
    e.target.style.height = (20+e.target.scrollHeight)+"px";
    setHei(e.target.style.height.slice(0,-2));
  }

  return(
    <PostBox>
      <textarea
        style = {{
          border : '1px solid #bcbcbc',
          width : '90%',
          resize : 'none',
          height : hei+'px',
          minHeight : '350px'
        }}
        onKeyDown = {size}
        onKeyUp = {size}
      >
      </textarea>
    </PostBox>
  );
}

export default PostContents;