import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 Error. 요청하신 페이지를 찾을 수 없습니다.</h1>
      <Link to="/">홈으로 돌아가기</Link>
    </>
  );
};

export default NotFoundPage;
