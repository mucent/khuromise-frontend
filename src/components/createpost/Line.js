import React, {useState, useRef} from 'react';
import styled from "styled-components";

const LineBox = styled.div`
  width : 100%;
  height : 2px;
  background : gray;
  margin : auto;
`;

function Line() {
    return (
      <LineBox />
    );
}

export default Line;