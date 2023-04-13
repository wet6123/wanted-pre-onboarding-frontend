import { useEffect } from "react";
import { TodoItem } from "./TodoItem";
import {
  getTodos,
  useTodosDispatch,
  useTodosState,
} from "../../hooks/useTodos";

export const TodoList = () => {
  const state = useTodosState();
  const dispatch = useTodosDispatch();

  const { data: todos, loading, error } = state.todos;

  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!todos) return null;

  return (
    <ul>
      {todos && todos.map((todo) => <TodoItem item={todo} key={todo.id} />)}
    </ul>
  );
};
