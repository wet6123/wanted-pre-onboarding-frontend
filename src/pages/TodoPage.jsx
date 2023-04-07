import React from "react";
import { Link } from "react-router-dom";

const TodoPage = () => {
  return (
    <>
      <h1>Todo 페이지 입니다.</h1>
      <div>
        <Link to="/">홈</Link>
      </div>
    </>
  );
};

export default TodoPage;
