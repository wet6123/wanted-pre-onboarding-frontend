import {
  createTodo,
  useTodosDispatch,
  useTodosState,
} from "../../hooks/useTodos";

export const TodoCreate = () => {
  const state = useTodosState();
  const dispatch = useTodosDispatch();

  const { data: todos, loading, error } = state.todos;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newTodo = new FormData(e.currentTarget).get("todo");
    if (!newTodo) {
      alert("내용을 입력해주세요.");
      return;
    }

    const payload = {
      todo: `${newTodo}`,
    };

    createTodo(dispatch, payload);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!todos) return null;

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input data-testid="new-todo-input" type="text" name="todo" />
        <button data-testid="new-todo-add-button" type="submit">
          추가
        </button>
      </form>
    </>
  );
};
