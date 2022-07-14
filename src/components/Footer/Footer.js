import styled from "styled-components";

const FooterBlock = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid #bcbcbc;

  .box {
    width: 80%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    color: #bcbcbc;
  }

  .club {
    font-size: 20px;
    color: #bcbcbc;
    margin-bottom: 3px;
  }

  .content {
    font-size: 14px;
    color: #bcbcbc;
    margin-bottom: 3px;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="box">
        <div className="title">KHUromise</div>
        <div className="club">경희대학교 컴퓨터공학부 HACKER</div>
        <div className="content">
          사이트 제작: 강경현, 박예림, 변시윤, 권승원, 양동균, 이천국
        </div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
