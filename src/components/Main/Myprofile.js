import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


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

function Myprofile(props) {
    const { isLogin } = props;
    const navigate = useNavigate();

    const onClick1 = () => {
        if (isLogin === true) {
            navigate(`/createpost`);
            window.location.reload();
        }
        else {
            alert("로그인 후 이용 가능합니다.");
            navigate(`/login`);
        }
    }
    
    const onClick2 = () => {
        if (isLogin === true) {
            navigate(`/Mypost`);
            window.location.reload();
        }
        else {
            alert("로그인 후 이용 가능합니다.");
            navigate(`/login`);
            window.location.reload();
        }
    }

    return(
        <div>
            <Profile></Profile>
            <StyleButton onClick={onClick1}>약속하기</StyleButton>
            <StyleButton onClick={onClick2}>나의게시글</StyleButton>
        </div>
    );
}


export default Myprofile