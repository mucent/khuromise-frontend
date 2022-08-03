import React from 'react';
import styled from 'styled-components';
import Searchbutton from './Searchbutton.jpg';

const SearchContainer = styled.div`
    display: flex;
    width: 17rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 10px;

    margin: -30rem 54rem auto auto;
    padding: 5px;


    .Searchbox {
        width: 14.2rem;
        height: 2.7rem;
        border: 2px solid gray;
        border-radius: 8px;
    }    

`
//Searchbutton 이미지 넣기, Searchbox 검색 가능하게 하기//

function Search() {
    return (
        <SearchContainer>
            <div className="Searchbox"></div>
        </SearchContainer>
    );
}

export default Search;