import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("emp_id")) {
      navigate("/login");
    }
  }, []);

  const [task, setTask] = useState([{}]);

  useEffect(() => {
    if (!localStorage.getItem("emp_id")) {
      navigate("/login");
    }
  }, []);

  useEffect(function () {
    async function getEvent() {
      const res = await axios.get(
        `https://erp-django.onrender.com/erp/tasks/${localStorage.getItem(
          "emp_id"
        )}/`
      );
      for (let i = 0; i < res.data.length; i++) {
        setTask((task) => [
          ...task,
          { title: res.data[i].task_desc, date: res.data[i].start_date },
        ]);
      }
    }
    getEvent();
  }, []);

  return (
    <div className="bg-darkBg h-full">
      <TopBar />

      <div style={{ gridTemplateColumns: "1fr 12fr" }} className="grid">
        <Sidebar />
        <div style={{ marginLeft: "-2rem" }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={task}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
