import React from "react";
import { Todo } from "../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/"); //returning json full of objects of todos
  const todos: Todo[] = await res.json(); // passing todos into the Todo component

  return todos;
};
async function TodosList() {
  const todos = await fetchTodos();

  // wrapping the entire return statement in fragments
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
