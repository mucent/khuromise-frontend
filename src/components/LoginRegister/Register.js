import styled from "styled-components";

const RegisterTemplate = styled.div`
  width: 400px;
  height: auto;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #bcbcbc;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .head {
    text-align: right;
  }

  td {
    padding: 5px;
  }

  input {
    width: 160px;
    height: 26px;
    margin: 0px;
    border: 1px solid #bcbcbc;
  }

  button {
    width: 70px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #bcbcbc;
  }

  .genderButton {
    width: 84px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #bcbcbc;
  }

  .emailInput {
    width: 80px;
    height: 26px;
    margin: 0px;
    border: 1px solid #bcbcbc;
  }

  .registerButton {
    width: 150px;
    height: 50px;
    margin-top: 30px;

    font-size: 20px;
    background-color: skyblue;
  }
`;

const Register = () => {
  return (
    <RegisterTemplate>
      <table>
        <tbody>
          <tr>
            <td className="head">아이디</td>
            <td>
              <input placeholder="아이디를 입력해주세요" />
            </td>
            <td>
              <button>중복확인</button>
            </td>
          </tr>
          <tr>
            <td className="head">비밀번호</td>
            <td>
              <input placeholder="비밀번호를 입력해주세요" />
            </td>
          </tr>
          <tr>
            <td className="head">비밀번호 확인</td>
            <td>
              <input placeholder="비밀번호를 다시 입력해주세요" />
            </td>
          </tr>
          <tr>
            <td className="head">이름</td>
            <td>
              <input placeholder="이름을 입력해주세요" />
            </td>
          </tr>
          <tr>
            <td className="head">성별</td>
            <td>
              <button className="genderButton">남자</button>
              <button className="genderButton">여자</button>
            </td>
          </tr>
          <tr>
            <td className="head">생년월일</td>
            <td>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td className="head">e-mail</td>
            <td>
              <input className="emailInput" placeholder="e-mail" />
              <span>@khu.ac.kr</span>
            </td>
            <td>
              <button>인증하기</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="registerButton">회원가입</button>
    </RegisterTemplate>
  );
};

export default Register;
