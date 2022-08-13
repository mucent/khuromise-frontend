import React , {Component, useState} from 'react';
import styled from 'styled-components';
import {Link,useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import PostListItem from '../PostList/PostListItem';
import PostList from '../PostList/PostList';
import EmptyPage from '../EmptyPage';
import PurposeList from '../createpost/PurposeList';

const Listbox = styled.div`
  width: 100%;
  height: 100%;
  margin : 1px;
  box-shadow: 0 0 8px 0 #bcbcbc;
  border-radius: 16px;

  .Buttonbox {
    outline: none;
    font-size: 100%;
    height: 15%;
    width: 100%;
    border-bottom: 2px solid #bcbcbc;
  }
  .List {
    width: 95%;
    height: auto;
    border: 1px solid black;
    display: inline-flex;
    margin: 5px 10px;
  }
`

function Post5() {
  const url = new URL(`http://localhost:3002/categories`);
  const param = new URLSearchParams(PostList);
  param.get("id");


  return (
    <Listbox>
      <div className='Buttonbox'>
      </div>
    </Listbox>
  )

};




export default Post5;