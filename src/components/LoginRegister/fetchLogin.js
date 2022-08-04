const fetchLogin = async({ inputId, inputPw }) => {
  const response = await fetch(`http://localhost:3002/users`);
  
  if (response.ok) {
    const usersInfo = await response.json();
    //console.log(usersInfo);
    const userInfo = usersInfo.find((user) => user.userId === inputId)
    //console.log(userInfo);
    //console.log(inputId);
    //console.log(inputPw);
    if (!userInfo) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
    else if (userInfo.userPw !== inputPw) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
    else {
      return userInfo;
    }
  }
  else {
    return alert("오류가 발생했습니다.\n 다시 시도해 주세요.");
  }
}


export default fetchLogin;