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

function Post5(){
  const categories = useFetch(`http://localhost:3002/posts`);
  return (
    <Listbox>
      {categories.map(({id,category, title, placeName})=>(
        <>
        <div className='Buttonbox'>
          <button key={id}>{category}</button>
        </div>
        <div className='List'>{title} / {placeName}</div>
        </>
      ))}
    </Listbox>
  );
}




export default Post5;