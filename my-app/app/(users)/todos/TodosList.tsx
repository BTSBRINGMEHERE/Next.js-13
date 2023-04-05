import { Todo } from "@/type/typings";
import Link from "next/link";
import React from "react";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  return todos;
};

//함수 자체를 Promise 객체를 받은 이유는 아직 잘 모르겠다...
const TodosList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
