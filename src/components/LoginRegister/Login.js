import styled from "styled-components";
import logo from "./../Header/logo.png";
import { useState } from "react";
import fetchLogin from "./fetchLogin";
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

  // 입력한 id, pw 상태 관리
  const [inputAccount, setInputAccount] = useState({
    inputId : "",
    inputPw : ""
  })

  const { inputId, inputPw } = inputAccount;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputAccount({
      ...inputAccount,
      [name] : value
    });
  }
  
  // 로그인 account 정보 불러오기
  const onClick = async () => {
    try {
      const LoginUser = await fetchLogin(inputAccount);
      //console.log(LoginUser);
      if (LoginUser !== undefined) {
        sessionStorage.setItem('LoginUserInfo', LoginUser.userName);
        navigate(`/`);
      }
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <LoginTemplate>
      <Logo src={logo} />
      <LoginBox>
          <div className="input_box">
            <input name="inputId" type="text" placeholder="ID" value={inputId} onChange={onChange}></input>
            <input name="inputPw" type="password" placeholder="Password" value={inputPw} onChange={onChange}></input>
          </div>
          <button className="login_btn" onClick={onClick}>로그인</button>
      </LoginBox>
      <BottomBox>
        <button>아이디/비밀번호 찾기</button>
        <button>회원가입</button>
      </BottomBox>
    </LoginTemplate>
  );
};

export default Login;
