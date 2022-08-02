import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Profile = styled.div`
    width: 88%;
    height: 3rem;
    border: 1px solid black;
    padding: 11px;
    margin: 2px;
`
const StyleButton = styled.button`
    width: 7rem;
    height: 2.7rem;
    border: 1px solid black;
    border-radius: 8px;
    font-align: center;
    background-color: white;
    margin: 10px;
    cursor: Pointer;
`
//login 된 my profile 정보 나오게 만들기//

function Myprofile() {
    return(
        <div>
            <Profile></Profile>
            <Link to="/createpost">
                <StyleButton>약속하기</StyleButton>
            </Link>
            <Link to="/Mypost">
                <StyleButton>나의 게시글</StyleButton>
            </Link>
        </div>
    );
}


export default Myprofile