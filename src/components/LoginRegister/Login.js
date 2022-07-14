import styled from "styled-components";
import logo from "./../Header/logo.png";

const LoginTemplate = styled.div`
  width: 300px;
  height: 300px;
  margin: 100px auto;
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
  return (
    <LoginTemplate>
      <Logo src={logo} />
      <LoginBox>
        <div className="input_box">
          <input className="id" type="text" placeholder="ID"></input>
          <input className="pw" type="text" placeholder="Password"></input>
        </div>
        <button className="login_btn">로그인</button>
      </LoginBox>
      <BottomBox>
        <button>아이디/비밀번호 찾기</button>
        <button>회원가입</button>
      </BottomBox>
    </LoginTemplate>
  );
};

export default Login;
