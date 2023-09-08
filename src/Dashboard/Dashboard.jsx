import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebar,
} from "react-pro-sidebar";

const Dashboard = () => {
  return (
    <div>
      <SideBar />
    </div>
  );
};

function SideBar() {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default Dashboard;
