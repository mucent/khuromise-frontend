import React , {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { useParams, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactDOM } from 'react';
import { render } from '@testing-library/react';
import PostList from '../PostList/PostList';

const Listbox = styled.div`
  width: 100%;
  height: 100%;
  margin : 1px;
  box-shadow: 0 0 8px 0 #bcbcbc;
  border-radius: 16px;
  display: grid;

  .Buttonbox {
    outline: none;
    font-size: 100%;
    height: 15%;
    width: 30%;
    border-bottom: 2px solid #bcbcbc;
  }
  .List {
    width: 40%;
    height: auto;
    display: inline-flex;
    margin: 5px 10px;
  }
`
const PurposeBox = styled.div`
  width: 18%;
  height : 30px;
  margin : auto;
  display : inline-block;
  border: 1px solid #bcbcbc;
  position : relative;
  font-size: 15px;
  text-align : center;
  line-height : 30px;
`;

const PurposeBarBox = styled.div`
  width: 100%;
`;


function Post5(){
  const [purposes, setPur] = useState([
  {
    id : 1,
    purname : '식사',
    active : true
  },
  {
    id : 2,
    purname : '운동',
    active : false
  },
  {
    id : 3,
    purname : '게임',
    active : false
  },
  {
    id : 4,
    purname : '공부',
    active : false
  },
  {
    id : 5,
    purname : '기타',
    active : false
  }
]);

const onToggle = id => {
  setPur(
    purposes.map(purpose => 
      purpose.id === id ? { ...purpose, active: true } : { ...purpose, active: false }
    )
  );
}

function Purpose({ purpose, onToggle }) {
  
  return (
    <b
      style = {{
        cursor:'pointer',
        color: purpose.active ? 'red' : 'black'
      }}
      onClick = {()=> onToggle(purpose.id)}
    >
    {purpose.purname}
    </b>
  );
}

  return (
    <Listbox>
    <PurposeBarBox>
      {purposes.map(purpose => (
      <PurposeBox key={purpose.id}>
        <Purpose purpose={purpose} key={purpose.id} onToggle={onToggle}/>
      </PurposeBox>
    ))}
  </PurposeBarBox>
  </Listbox>
  );
}




export default Post5;