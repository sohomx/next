import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/"); //returning json full of objects of todos
  const todos: Todo[] = await res.json(); // passing todos into the Todo component
  return todos;
};
async function TodosList() {
  const todos = await fetchTodos();

  return <div>TodosList</div>;
}

export default TodosList;
