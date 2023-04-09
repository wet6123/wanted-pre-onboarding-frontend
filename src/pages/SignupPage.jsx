import React from "react";
import NavBar from "../components/NavBar";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <>
      <NavBar />
      <h1>회원가입 페이지 입니다.</h1>
      <SignupForm />
    </>
  );
};

export default SignupPage;
