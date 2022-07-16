import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const TimeBox = styled.div`
  display : flex;
  justify-content : center;
`;

const InputBox = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content : center;
  
`;

function Time() {
  return (
    <TimeBox>
      <InputBox>
        <input
          type='date'
          style={{
            width : '90%',
            height : '20px',
            fontSize : '15px',
            borderStyle : 'double',
            padding : '3px'}}/>
      </InputBox>
    </TimeBox>
  );
}

export default Time;