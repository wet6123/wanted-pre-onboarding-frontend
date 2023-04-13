import React from "react";
import NavBar from "../components/NavBar";
import { TodosProvider } from "../context/TodoContext";
import { TodoList } from "../components/todo/TodoList";
import { TodoCreate } from "./../components/todo/TodoCreate";

const TodoPage = () => {
  return (
    <>
      <TodosProvider>
        <NavBar />
        <h1>Todo 페이지 입니다.</h1>
        <TodoCreate />
        <TodoList />
      </TodosProvider>
    </>
  );
};

export default TodoPage;
