import styled from "styled-components";
import logo from "./logo.png";

const HeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #bcbcbc;
  margin: 0;
`;

const ItemBox = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
`;

const ButtonBox = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogRegButton = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 5px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <ItemBox>
        <Logo src={logo} />
        <ButtonBox>
          <LogRegButton>로그인</LogRegButton>
          <LogRegButton>회원가입</LogRegButton>
        </ButtonBox>
      </ItemBox>
    </HeaderBlock>
  );
};

export default Header;
