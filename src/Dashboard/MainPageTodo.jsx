import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const MainPageTodo = () => {
  const [todo, setTodo] = useState([
    { id: "", task: "", severity: "", completed: "" },
  ]);

  function AddTodo() {
    function onSubmit(e) {
      e.preventDefault();
    }

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo.task}
          placeholder="Add task"
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
        <input
          type="text"
          value={todo.severity}
          placeholder="Add Severity"
          onChange={(e) => setTodo({ ...todo, severity: e.target.value })}
        />
        <input
          type="text"
          value={todo.completed}
          placeholder="Add task"
          onChange={(e) => setTodo({ ...todo, completed: e.target.value })}
        />
      </form>
    );
  }

  function TableRows({ todo }) {
    return (
      <tr className="bg-lightBg border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {todo + 1}
        </th>
        <td className="px-6 py-4">{todo.task}</td>
        <td className="px-6 py-4">{todo.severity}</td>
        <td className="px-6 py-4">{todo.completed}</td>
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <AddTodo />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Serial Number
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Severity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <TableRows todo={todo} />
        </table>
      </div>
    </div>
  );
};

export default MainPageTodo;
