import axios from "axios";
import React, { useEffect, useState } from "react";
import PieChart from "../Piechart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const EmployeeCard = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function getEmpDetails() {
      const res = await axios.get("https://erp-django.onrender.com/erp/emp/");
      console.log(res.data.data.values);
      setDetails(res.data.data.values);
    }
    getEmpDetails();
  }, []);

  return (
    <div>
      <div
        className="bg-blk"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "500px",
        }}
      >
        <img
          src="https://res.cloudinary.com/dgyvdwda7/image/upload/v1696737425/ov0qydlb5aziukomqm2e.jpg"
          alt="emp-img"
          className="border-2 border-black h-3/5 justify-around mx-auto"
        />

        <div className="text-lg">
          <p className="py-2">Name - Shivraj </p>
          <p className="py-2">Emp_Id - 2 </p>
          <p className="py-2">Address - Shivraj </p>
          <p className="py-2">Maratial Status - Unmarried</p>
          <p className="py-2">Birthdate - 12/5/2003</p>
          <p className="py-2">Email - shivrajmurali@gmail.com</p>
        </div>
      </div>
      <Projects />
    </div>
  );
};

function Projects() {
  const [chartData, setChartData] = useState([
    { id: "Pending", label: "Pending", value: 0 },
    { id: "Completed", label: "Completed", value: 0 },
    { id: "Incomplete", label: "Complete", value: 0 },
  ]);
  useEffect(function () {
    async function getApi() {
      const res = await axios.get(
        `https://erp-django.onrender.com/erp/task_status/${localStorage.getItem(
          "emp_id"
        )}/`
      );
      const pending = res.data.Pending;
      const incomplete = res.data.InProgress;
      const complete = res.data.Completed;

      setChartData((chartData) => [
        { ...chartData[0], value: pending },
        { ...chartData[1], value: incomplete },
        { ...chartData[2], value: complete },
      ]);
    }
    getApi();
  }, []);

  return (
    <div
      className="bg-blk h-screen"
      style={{ display: "grid", gridTemplateColumns: "1fr 3fr " }}
    >
      <div>
        <PieChart data={chartData} />
      </div>
      <div>
        <h2 className="text-center font-jakarta font-semibold">
          Projects Statistics
        </h2>
        <Graph />
      </div>
    </div>
  );
}

function Graph() {
  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5) + 1,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5) + 1,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5) + 1,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 50) + 10,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 50) + 10,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#999"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default EmployeeCard;

// https://erp-django.onrender.com/erp/task_status/1/
