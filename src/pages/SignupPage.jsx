import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <h1>회원가입 페이지 입니다.</h1>
      <div>
        <Link to="/signin">로그인</Link>
      </div>
      <div>
        <Link to="/">홈</Link>
      </div>
    </>
  );
};

export default SignupPage;
