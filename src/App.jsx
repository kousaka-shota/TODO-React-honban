import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState(["aaaa", "bbbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickTodoText = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newTodos);
    onClickDelete(index);
  };
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
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickImcomplete(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
