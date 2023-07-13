import Link from "next/link";
import React from "react";
import todos from "@jsons/todos.json";
import useLimitPosts from "@/hooks/useLimitPosts";
export default function Userdocs() {
  const url = `${process.env.DOMAIN}/api/todos/`;
  const todo = useLimitPosts({ jsonFile: "todos", lastIndex: 1 });
  const manyTodos = useLimitPosts({ jsonFile: "todos", lastIndex: 3 });

  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">
        Now, let&apos;s see how to use the <code>/api/todos</code> endpoint.
      </h3>
      <p id="apitodos" className="font-medium my-2">
        The <code>/api/todos</code> endpoint provides a list of todos with
        randomly generated data. The data includes the todo&apos;s id, userId, title and completed. The data is generated randomly and
        is not based on any real todo data. The data is generated using the
        <Link href={url} className="underline underline-offset-4">
          {" "}
          API Ninja Hub Todos{" "}
        </Link>
        package.
      </p>
      <h3 className="text-center text-xl font-bold my-5">Todo Object</h3>
      <p>
        The todo object is a JSON object that contains the following properties:
      </p>
      <ul className="list-disc list-inside text-green-600">
        <li>
          <code>id</code> - The id of the todo.
        </li>
        <li>
          <code>userId</code> - The id of the user that the todo belongs to.
        </li>
        <li>
          <code>title</code> - The title of the todo.
        </li>
        <li>
          <code>completed</code> - Whether or not the todo is completed.
        </li>
      </ul>

      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url+"1"}</span>
        </h4>
        <br />
        {JSON.stringify(todo, null, 2)}
      </pre>
      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url}</span>
        </h4>
        <br />
        {JSON.stringify(manyTodos, null, 2)}
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p className="text-green-600 text-2xl">Upto {todos.length} Todos.</p>
      </pre>
    </>
  );
}
