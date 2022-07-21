import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const TitleBox = styled.div`
  width : 10%;
  height : 25px;
  border : 1px solid #bcbcbc;
  display : inline-block;
  text-align : center;
  line-height : 25px;
`;

const TitleWritingBox = styled.div`
  width : 80%;
  height : 25px;
  border : 1px solid #bcbcbc;
  display : inline-block;
  
`;

const TotalTitleBox = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content : center;
  
`;

function PostTitle(props) {

  const [posttitle, setPostTitle] = useState('');

  const onChange = (e) => {
    setPostTitle(e.target.value);
    props.setTitleValue(e.target.value);
  };

  return (
    <div>
      <TotalTitleBox>
        <TitleBox>
          제목
        </TitleBox>
        <TitleWritingBox>
          <input style={{
            width : '80%',
            height : '18px',
            border : '0px solid #bcbcbc',
            position : 'relative',
            top : '8%'
          }}
            onChange={onChange}
            value={posttitle}/>
        </TitleWritingBox>
      </TotalTitleBox>
    </div>
    )
}

export default PostTitle;