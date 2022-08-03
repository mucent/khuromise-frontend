import styled from "styled-components";
import logo from "./../Header/logo.png";
import { useState, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { LoginIdContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const LoginTemplate = styled.div`
  width: 300px;
  height: 300px;
  margin: 190px auto;
  border: 1px solid #bcbcbc;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 300px;
  height: 80px;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .input_box {
    width: 200px;
    height: auto;
    margin-right: 6px;
  }

  input {
    width: 200px;
    height: 30px;
    border: 1px solid #bcbcbc;
  }

  .login_btn {
    width: 70px;
    height: 67px;
    border: 1px solid #bcbcbc;
    border-left: none;
  }

  .id {
    border-bottom: none;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 80px;
`;

const BottomBox = styled.div`
  width: 200px;
  height: 60px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px;
  button {
    border: 1px solid #bcbcbc;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  // users 정보 호출
  const fetchinfo = useFetch(`http://localhost:3002/users`);
  const userInfo = [...fetchinfo];
  //console.log(userInfo);

  // 입력값 상태 관리
  const [inputId, setUserId] = useState("");
  const [inputPw, setUserPw] = useState("");

  const onIdChange = (e) => {
   setUserId(e.target.value);
  }

  const onPwChange = (e) => {
    setUserPw(e.target.value);
  }

  // nextId 정보 불러오기
  const nextId = useContext(LoginIdContext);
  console.log(nextId);
  
  // 로그인 정보 전달 함수
  
  return (
    <LoginTemplate>
      <Logo src={logo} />
      <LoginBox>
          <div className="input_box">
            <input className="id" type="text" placeholder="ID" value={inputId} onChange={onIdChange}></input>
            <input className="pw" type="password" placeholder="Password" value={inputPw} onChange={onPwChange}></input>
          </div>
        <form>
          <button className="login_btn">로그인</button>
        </form>
      </LoginBox>
      <BottomBox>
        <button>아이디/비밀번호 찾기</button>
        <button>회원가입</button>
      </BottomBox>
    </LoginTemplate>
  );
};

export default Login;
