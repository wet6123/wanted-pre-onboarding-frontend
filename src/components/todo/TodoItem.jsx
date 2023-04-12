import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

export const TodoItem = (data) => {
  const { id, todo, isCompleted, userId } = data.item;
  // const { updateTodo, deleteTodo } = useTodoContext();

  // const [isEdit, setIsEdit] = useState(false);

  // const onSubmitHandler = () => {};

  const onCheck = () => {
    // updateTodo({ id, todo, isCompleted: !isCompleted, userId });
  };

  const onToggleMod = () => {};
  const onDel = () => {};
  return (
    <li>
      {/* {isEdit ? (
        <form onSubmit={onSubmitHandler}>
          <label>
            <input type="checkbox" value={isCompleted} />
            <input data-testid="modify-input" />
          </label>
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button">취소</button>
        </form>
      ) : ( */}
      <>
        <label>
          <input type="checkbox" value={isCompleted} onChange={onCheck} />
          <span>{todo}</span>
        </label>
        <button data-testid="modify-button" onClick={onToggleMod}>
          수정
        </button>
        <button data-testid="delete-button" onClick={onDel}>
          삭제
        </button>
      </>
      {/* )} */}
    </li>
  );
};
