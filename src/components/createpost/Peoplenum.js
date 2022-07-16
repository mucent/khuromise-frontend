import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const PeopleBox1 = styled.div`
  width : 100%;
  height : 30px;
  border : 1px solid #bcbcbc;
  margin : auto;
  display : flex;
  flex-direction: column;
  justify-content : center;
`;

const PeopleBox2 = styled.div`
  display : flex;
  justify-content : center;
`;



function Peoplenum() {
  return (
    <PeopleBox1>
      <PeopleBox2>
        <div>
          인원수 : 
          <input style={{
            width : '50%',
            height : '17px',
          }}/>
          <button>설정</button>
        </div>
      </PeopleBox2>
    </PeopleBox1>
  );
}

export default Peoplenum;