import React from "react";
import SigninForm from "../components/SigninForm";
import NavBar from "../components/NavBar";

const SigninPage = () => {
  return (
    <>
      <NavBar />
      <h1>로그인 페이지 입니다.</h1>
      <SigninForm />
    </>
  );
};

export default SigninPage;
