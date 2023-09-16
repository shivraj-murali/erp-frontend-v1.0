import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "./Calendar";
import ToDoList from "./ToDoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
 

  return (
    <>
      <HomePage />

      {/* <div>

        <h1>TODO</h1>
        <ToDoList />

        <Profile />
      </div> */}
    </>
  );
};

export default Dashboard;
