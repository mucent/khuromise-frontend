import styled from "styled-components";
import icon from "./icon.png";
import { Link } from "react-router-dom";

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
  border: 1px solid black;
  border-radius: 6px;
  font-size: 16px;

  text-align: center;
  line-height: 30px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <ItemBox>
        <Link to="/">
          <Logo src={icon} />
        </Link>
        <ButtonBox>
          <Link to="/login">
            <LogRegButton>로그인</LogRegButton>
          </Link>
          <Link to="/register">
            <LogRegButton>회원가입</LogRegButton>
          </Link>
        </ButtonBox>
      </ItemBox>
    </HeaderBlock>
  );
};

export default Header;
