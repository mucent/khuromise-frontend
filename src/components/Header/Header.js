import styled from "styled-components";
import logo from "./logo.png";

const HeaderBlock = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #bcbcbc;
`;

const Logo = styled.img`
  width: 150px;
  height: 40px;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Logo src={logo} />
    </HeaderBlock>
  );
};

export default Header;
