import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("emp_id")) {
      navigate("/login");
    }
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function getEmpDetails() {
      setIsLoading(true);
      const res = await axios.get(
        `https://erp-django.onrender.com/erp/project/`
      );
      console.log(res.data.data.values[0]);
      setTask(res.data.data.values);
      setIsLoading(false);
    }
    getEmpDetails();
  }, []);

  function Loader() {
    return (
      <p className="font-jakarta text-white text-center">
        Getting Projects Summary...
      </p>
    );
  }

  return (
    <div className="  bg-blk h-full">
      <TopBar />
      <div className="grid" style={{ gridTemplateColumns: "1fr 12fr" }}>
        <Sidebar />

        <div style={{ marginLeft: "-2rem" }}>
          <h2 className="text-4xl text-center my-4 mt-6">
            Admin Project Lineup
          </h2>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 text-xl">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
                <TableHead />
                <TableElements task={task} />
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function TableHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-jakarta">
      <tr>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Project Id
        </th>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Project Name
        </th>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Client
        </th>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Project Leader
        </th>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Start Date
        </th>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Deadline
        </th>
        <th scope="col" className="px-2 py-3 text-center text-lg">
          Status
        </th>
      </tr>
    </thead>
  );
}

function Tablebody({ task }) {
  return (
    <tr className="bg-grey border-1 dark:bg-gray-900 border-white font-xl">
      <td className="px-2 py-4 font-semibold text-center text-base font-jakarta">
        {task.project_id}
      </td>
      <td className="px-2 py-4 text-center text-base font-jakarta">
        {task.description}
      </td>

      <td className="px-2 py-4 text-center text-base font-jakarta">
        {task.client}
      </td>

      <td className="px-2 py-4 text-center text-base font-jakarta">
        {task.project_leader}
      </td>

      <td className="px-2 py-4 text-center text-base font-jakarta">
        {task.start_date}
      </td>

      <td className="px-2 py-4 text-center text-base font-jakarta">
        {task.end_date}
      </td>

      {task.status === "completed" ? (
        <td className="px-2 py-4 font-semibold !text-green text-center text-base font-jakarta">
          {task.status}
        </td>
      ) : (
        <td className="px-2 py-4 font-semibold !text-red text-center text-base font-jakarta">
          {task.status}
        </td>
      )}
    </tr>
  );
}

function TableElements({ task }) {
  return (
    <tbody>
      {task.map((tasks, i) => (
        <Tablebody task={tasks} key={i} />
      ))}
    </tbody>
  );
}
export default AdminPage;
