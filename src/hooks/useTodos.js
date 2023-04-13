import axios from "axios";
import api from "../api/constant";
import {
  TodosDispatchContext,
  TodosStateContext,
} from "../context/TodoContext";
import { useContext } from "react";

export const useTodosState = () => {
  const state = useContext(TodosStateContext);
  if (!state) {
    throw new Error("Cannot find TodosProvider");
  }
  return state;
};

export const useTodosDispatch = () => {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find TodosProvider");
  }
  return dispatch;
};

const authConfig = (access_token) => ({
  headers: {
    Authorization: access_token === null ? "" : `Bearer ${access_token}`,
    "Content-Type": "application/json",
  },
});

export const getTodos = async (dispatch) => {
  dispatch({ type: "GET_TODOS" });
  try {
    const token = window.localStorage.getItem("access_token");
    const response = await axios.get(api.getTodos(), authConfig(token));
    dispatch({ type: "GET_TODOS_SUCCESS", data: response.data });
  } catch (err) {
    dispatch({ type: "GET_TODOS_ERROR", error: err });
  }
};

export const createTodo = async (dispatch, payload) => {
  dispatch({ type: "CREATE_TODO" });
  try {
    const token = window.localStorage.getItem("access_token");
    const response = await axios.post(
      api.createTodo(),
      payload,
      authConfig(token)
    );
    getTodos(dispatch);
    dispatch({ type: "CREATE_TODO_SUCCESS", data: response.data });
  } catch (err) {
    dispatch({ type: "CREATE_TODO_ERROR", error: err });
  }
};

export const deleteTodo = async (dispatch, id) => {
  dispatch({ type: "DELETE_TODO" });
  try {
    const token = window.localStorage.getItem("access_token");
    const response = await axios.delete(api.deleteTodo(id), authConfig(token));
    dispatch({ type: "DELETE_TODO_SUCCESS", data: response.data });
    getTodos(dispatch);
  } catch (err) {
    dispatch({ type: "DELETE_TODO_ERROR", error: err });
  }
};

export const updateTodo = async (dispatch, id, payload) => {
  dispatch({ type: "UPDATE_TODO" });
  try {
    const token = window.localStorage.getItem("access_token");
    const response = await axios.put(
      api.updateTodo(id),
      payload,
      authConfig(token)
    );
    dispatch({ type: "UPDATE_TODO_SUCCESS", data: response.data });
    getTodos(dispatch);
  } catch (err) {
    dispatch({ type: "UPDATE_TODO_ERROR", error: err });
  }
};
