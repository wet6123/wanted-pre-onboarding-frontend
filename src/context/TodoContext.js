import { createContext, useReducer } from "react";

const initialState = {
  todos: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = () => ({
  loading: true,
  data: null,
  error: null,
});

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

const todosReducer = (state, action) => {
  switch (action.type) {
    // get
    case "GET_TODOS":
      return {
        ...state,
        todos: loadingState,
      };
    case "GET_TODOS_SUCCESS":
      return {
        ...state,
        todos: success(action.data),
      };
    case "GET_TODOS_ERROR":
      return {
        ...state,
        todos: error(action.error),
      };
    // create
    case "CREATE_TODO":
      return {
        ...state,
        todos: loadingState,
      };
    case "CREATE_TODO_SUCCESS":
      return {
        ...state,
        todos: success([]),
      };
    case "CREATE_TODO_ERROR":
      return {
        ...state,
        todos: error(action.error),
      };
    // delete
    case "DELETE_TODO":
      return {
        ...state,
        todos: loadingState,
      };
    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        todos: success([]),
      };
    case "DELETE_TODO_ERROR":
      return {
        ...state,
        todos: error(action.error),
      };
    // UPDATE
    case "UPDATE_TODO":
      return {
        ...state,
        todos: loadingState,
      };
    case "UPDATE_TODO_SUCCESS":
      return {
        ...state,
        todos: success([]),
      };
    case "UPDATE_TODO_ERROR":
      return {
        ...state,
        todos: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};

export const TodosStateContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosStateContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
};
