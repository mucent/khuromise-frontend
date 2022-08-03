import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";

const RegisterTemplate = styled.div`
  width: 500px;
  height: auto;
  margin: 10px auto;
  padding: 40px;
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

  .dateInput {
    width: 163px;
    height: 28px;
  }

  button {
    width: 70px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #bcbcbc;
    background-color: white;
  }

  .genderButton {
    width: 83px;
    height: 30px;
    font-size: 14px;
    border: 1px solid #bcbcbc;
  }

  .emailInput {
    width: 88px;
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

  .greenText {
    font-size: 12px;
    color: green;
  }

  .redText {
    font-size: 12px;
    color: red;
  }

  .pw {
    -webkit-text-security: disc;
  }

  select {
    margin-right: 1px;
  }
`;

const Register = () => {
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [_pw, set_Pw] = useState(null);
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [certification, setCertification] = useState(true);

  const idRef = useRef(null);
  const pwRef = useRef(null);
  const _pwRef = useRef(null);
  const nameRef = useRef(null);
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const emailRef = useRef(null);

  const idChange = () => {
    setId(String(idRef.current.value));
  };
  const pwChange = () => {
    setPw(String(pwRef.current.value));
  };
  const _pwChange = () => {
    set_Pw(String(_pwRef.current.value));
  };
  const nameChange = () => {
    setName(String(nameRef.current.value));
  };
  const yearChange = () => {
    setYear(String(yearRef.current.value));
  };
  const monthChange = () => {
    setMonth(String(monthRef.current.value));
  };
  const dayChange = () => {
    setDay(String(dayRef.current.value));
  };
  const emailChange = () => {
    setEmail(String(emailRef.current.value) + "@khu.ac.kr");
  };

  const maleClick = () => {
    setGender("male");
  };

  const femaleClick = () => {
    setGender("female");
  };

  //ID 중복확인
  const users = useFetch(`http://localhost:3002/users`);
  const [canId, setCanId] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);

  const idCheckClick = () => {
    if (id !== null) {
      for (const user of users) {
        if (user.userId === id) {
          setCanId(false);
          setIsEmpty(false);
          break;
        } else {
          setCanId(true);
          setIsEmpty(false);
        }
      }
    } else {
      setIsEmpty(true);
    }
  };

  // 생년월일
  const startYear = 1900;
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const yearList = [];
  const monthList = [];
  const dayList = [];
  const endDayList = [29, 30, 31];
  const [year, setYear] = useState(todayYear);
  const [month, setMonth] = useState(todayMonth);
  const [day, setDay] = useState(todayDay);

  for (let y = startYear; y <= todayYear; y++) {
    yearList.push(y);
  }
  for (let m = 1; m <= 12; m++) {
    m < 10 ? monthList.push("0" + m) : monthList.push(m);
  }
  for (const endDay of endDayList) {
    const list = [];
    for (let day = 1; day <= endDay; day++) {
      day < 10 ? list.push("0" + day) : list.push(day);
    }
    dayList.push(list);
  }

  const month29 = ["2"];
  const month30 = ["4", "6", "9", "11"];
  const [selectDayList, setSelectDayList] = useState(dayList[0]);

  useEffect(() => {
    if (month29.includes(month)) {
      setSelectDayList(dayList[0]);
    } else if (month30.includes(month)) {
      setSelectDayList(dayList[1]);
    } else {
      setSelectDayList(dayList[2]);
    }
  }, [month]);

  // 이메일 인증 구현하기
  // 최종적으로 조건들 다 맞을 때 회원가입 가능하게 하기 (POST)
  return (
    <RegisterTemplate>
      <table>
        <tbody>
          <tr>
            <td className="head">아이디</td>
            <td>
              <input
                ref={idRef}
                onChange={idChange}
                placeholder="아이디를 입력해주세요"
              />
            </td>
            <td>
              <button onClick={idCheckClick}>중복확인</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {isEmpty && (
                <span className="redText">아이디를 입력해주세요.</span>
              )}
              {canId !== null &&
                (canId ? (
                  <span className="greenText">사용가능한 아이디입니다.</span>
                ) : (
                  <span className="redText">이미 사용중인 아이디입니다.</span>
                ))}
            </td>
          </tr>
          <tr>
            <td className="head">비밀번호</td>
            <td>
              <input
                className="pw"
                ref={pwRef}
                onChange={pwChange}
                placeholder="비밀번호를 입력해주세요"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {pw &&
                (pw.length < 8 ? (
                  <span className="redText">비밀번호가 너무 짧습니다.</span>
                ) : null)}
            </td>
          </tr>
          <tr>
            <td className="head">비밀번호 확인</td>
            <td>
              <input
                className="pw"
                ref={_pwRef}
                onChange={_pwChange}
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {pw &&
                _pw &&
                (pw === _pw ? (
                  <span className="greenText">비밀번호가 일치합니다.</span>
                ) : (
                  <span className="redText">비밀번호가 일치하지 않습니다.</span>
                ))}
            </td>
          </tr>
          <tr>
            <td className="head">이름</td>
            <td>
              <input
                ref={nameRef}
                onChange={nameChange}
                placeholder="이름을 입력해주세요"
              />
            </td>
          </tr>
          <tr>
            <td className="head">성별</td>
            <td>
              <button
                className="genderButton"
                onClick={maleClick}
                style={{
                  border:
                    gender === "male" ? "1px solid black" : "1px solid #bcbcbc",
                  backgroundColor: gender === "male" ? "#bcbcbc" : "white",
                }}
              >
                남자
              </button>
              <button
                className="genderButton"
                onClick={femaleClick}
                style={{
                  border:
                    gender === "female"
                      ? "1px solid black"
                      : "1px solid #bcbcbc",
                  backgroundColor: gender === "female" ? "#bcbcbc" : "white",
                }}
              >
                여자
              </button>
            </td>
          </tr>
          <tr>
            <td className="head">생년월일</td>
            <td>
              {/* <input
                className="dateInput"
                type="date"
                ref={birthDayRef}
                onChange={birthDayChange}
              /> */}
              <select ref={yearRef} onChange={yearChange} value={year}>
                {yearList.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
              년
              <select ref={monthRef} onChange={monthChange} value={month}>
                {monthList.map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
              월
              <select ref={dayRef} onChange={dayChange} value={day}>
                {selectDayList.map((day) => (
                  <option key={day}>{day}</option>
                ))}
              </select>
              일
            </td>
          </tr>
          <tr>
            <td className="head">e-mail</td>
            <td>
              <input
                className="emailInput"
                ref={emailRef}
                onChange={emailChange}
                placeholder="e-mail"
              />
              <span>@khu.ac.kr</span>
            </td>
            <td>
              <button>인증하기</button>
            </td>
          </tr>
          <tr>
            <td></td>
            {certification && (
              <td className="greenText">인증이 완료되었습니다.</td>
            )}
          </tr>
        </tbody>
      </table>
      <button className="registerButton">회원가입</button>
    </RegisterTemplate>
  );
};

export default Register;
