import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import PieChart from "./Piechart";
import WorksOverview from "./WorksOverview";
import Sidebar from "./SideBar";
import axios from "axios";

const HomePage = () => {
  const [chartData, setChartData] = useState([
    { id: "Pending", label: "Pending", value: 0 },
    { id: "Completed", label: "Completed", value: 0 },
    { id: "Incomplete", label: "Complete", value: 0 },
  ]);

  useEffect(function () {
    async function getApi() {
      const res = await axios.get(
        "https://erp-django.onrender.com/erp/task_status/1/"
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
    <div className="overflow-hidden">
      <div className="  bg-darkBg h-full">
        <TopBar />

        <div
          style={{ gridTemplateColumns: "1fr 7fr 5fr" }}
          className="mainPage justify-between grid h-[90vh] "
        >
          <Sidebar />
          <div className="p-6 pl-0 pt-0">
            <WorksOverview />
          </div>
          <PieChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
