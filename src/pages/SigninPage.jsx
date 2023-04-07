import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../components/signin/SigninForm";

const SigninPage = () => {
  return (
    <>
      <h1>로그인 페이지 입니다.</h1>
      <SigninForm />
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
      <div>
        <Link to="/">홈</Link>
      </div>
    </>
  );
};

export default SigninPage;
