import React from "react";
import TodosList from "./TodosList";

function todos() {
  return (
    <div>
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
}

export default todos;
