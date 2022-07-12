import styled from "styled-components";
import logo from "./logo.png";

const HeaderBlock = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #bcbcbc;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 150px;
  height: 40px;
`;

const ButtonBox = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
`;

const LogRegButton = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 5px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Logo src={logo} />
      <ButtonBox>
        <LogRegButton>로그인</LogRegButton>
        <LogRegButton>회원가입</LogRegButton>
      </ButtonBox>
    </HeaderBlock>
  );
};

export default Header;
