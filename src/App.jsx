import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { ImcompleteTodos } from "./components/imcomplete";
import { CompleteTodos } from "./components/completeTodo";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  //inputの値をTodostateにセット
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンの処理
  const onClickTodoText = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタンの処理
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  //完了ボタンの処理
  const onClickComplete = (index) => {
    const newTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newTodos);
    onClickDelete(index);
  };

  //戻るボタンの処理
  const onClickImcomplete = (index) => {
    const newimcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setImcompleteTodos(newimcompleteTodos);
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);
    setCompleteTodos(newcompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickTodoText}
      />
      {/* {imcompleteTodos.lenght >= 5 && (
        <p style={{ color: "red" }}>登録できるTodoは5個までです</p>
      )} */}

      <ImcompleteTodos
        imcompleteTodos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickImcomplete={onClickImcomplete}
      />
    </>
  );
};
