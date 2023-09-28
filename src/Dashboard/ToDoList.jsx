import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { InfinitySpin } from "react-loader-spinner";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function Loader() {
    return (
      <div className="flex justify-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  useEffect(function () {
    async function getTask() {
      setIsLoading(true);
      const res = await axios.get("https://erp-django.onrender.com/erp/task/");
      console.log(res.data.data.values);
      setTasks(res.data.data.values);
      console.log(tasks);
      setIsLoading(false);
    }
    getTask();
  }, []);

  return (
    <div className="  bg-darkBg h-full">
      <TopBar />
      <div className="grid" style={{ gridTemplateColumns: "1fr 12fr" }}>
        <Sidebar />

        <div style={{ marginLeft: "-2rem" }}>
          <h2 className="text-4xl text-center my-4 mt-6">Pending Tasks</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-mainBg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHead />
                <TaskList tasks={tasks} />
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function Task({ task }) {
  const [taskId, setTaskId] = useState(0);
  const handleUpdate = async () => {
    // setTaskId(task.task_id);
    // parseInt(taskId);
    // console.log(task.task_id);

    // const response = await fetch(
    //   "https://erp-django.onrender.com/erp/update_task_status/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       task_id: task.task_id,
    //       status: "completed",
    //     }),
    //   }
    // );
    const res = await axios.post(
      "https://erp-django.onrender.com/erp/update_task_status/",
      {
        task_id: task.task_id,
        status: "completed",
      }
    );
    console.log(res);
  };

  return (
    <tr className="bg-lightBg border-b dark:bg-gray-900 dark:border-gray-700 font-xl">
      <td className="px-6 py-4 font-semibold">{task.task_title}</td>
      <td className="px-6 py-4">{task.task_desc}</td>
      <td className="px-6 py-4">{task.start_date}</td>

      <td className="px-6 py-4">{task.end_date}</td>
      {/* <td className="px-6 py-4">{task.status}</td> */}
      <td className="px-6 py-4">
        <button
          type="button"
          className="focus:outline-none text-white bg-green hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleUpdate}
        >
          Completed
        </button>
      </td>
    </tr>
  );
}

function TaskList({ tasks }) {
  return (
    <tbody>
      {tasks.map((task) =>
        task.status === "completed" ? (
          <></>
        ) : (
          <Task task={task} key={crypto.randomUUID()} />
        )
      )}
    </tbody>
  );
}

async function updateStatus() {
  const res = await axios.post(
    "https://erp-django.onrender.com/erp/update_task_status/",
    {
      emp_id: localStorage.getItem("emp_id"),
      status: "completed",
    }
  );
}

function TableHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Task
        </th>
        <th scope="col" className="px-6 py-3">
          Task Description
        </th>
        <th scope="col" className="px-6 py-3">
          Start Date
        </th>
        <th scope="col" className="px-6 py-3">
          Deadline
        </th>
        <th scope="col" className="px-6 py-3">
          Update Status
        </th>
      </tr>
    </thead>
  );
}

export default ToDoList;
