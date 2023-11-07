import React from "react";
// import { Overview } from "./Visualisation";
import Overview from "./Visualisation";
import EmployeeCard from "./EmployeeCard";

const AdminDashboard = () => {
  return (
    <div>
      <Overview />
      <EmployeeCard />
    </div>
  );
};

export default AdminDashboard;
