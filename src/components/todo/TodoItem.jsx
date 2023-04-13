import { useState } from "react";
import { deleteTodo, updateTodo, useTodosDispatch } from "../../hooks/useTodos";

export const TodoItem = (data) => {
  const { id, todo, isCompleted, userId } = data.item;

  const dispatch = useTodosDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newTodo = formData.get("todo");

    if (!newTodo) {
      alert("내용을 입력해주세요.");
      return;
    }

    const payload = {
      todo: `${newTodo}`,
      isCompleted: isCompleted,
    };

    updateTodo(dispatch, id, payload);
    setIsEdit(!isEdit);
  };

  const onCheck = (e) => {
    e.preventDefault();

    const payload = {
      todo: `${todo}`,
      isCompleted: !isCompleted,
    };
    updateTodo(dispatch, id, payload);
  };

  const onToggleMod = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  const onDel = (e, id) => {
    e.preventDefault();
    deleteTodo(dispatch, id);
  };
  return (
    <li>
      {isEdit ? (
        <form onSubmit={onSubmitHandler}>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              name="isCompleted"
              onChange={onCheck}
            />
            <input type="text" data-testid="modify-input" name="todo" />
          </label>
          <button data-testid="submit-button" type="submit">
            제출
          </button>
          <button data-testid="cancel-button" onClick={onToggleMod}>
            취소
          </button>
        </form>
      ) : (
        <form>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              name="isCompleted"
              onChange={onCheck}
            />
            <span>{todo}</span>
          </label>
          <button data-testid="modify-button" onClick={onToggleMod}>
            수정
          </button>
          <button data-testid="delete-button" onClick={(e) => onDel(e, id)}>
            삭제
          </button>
        </form>
      )}
    </li>
  );
};
