import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage.jsx";
import ForgotPassword from "./LoginForm/ForgotPassword.jsx";
import SignupForm from "./LoginForm/SignupForm.jsx";
import HomePage from "./Dashboard/HomePage.jsx";
import ProjectList from "./Dashboard/ProjectList.jsx";
import Calendar from "./Dashboard/Calendar.jsx";
import CreateOTP from "./LoginForm/CreateOTP";
import CreatePassword from "./CreatePassword";
import ToDoList from "./Dashboard/ToDoList";
import AdminPage from "./Dashboard/AdminPage";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <SignupForm />,
  },
  {
    path: "/forgotpassword",
    element: <CreateOTP />,
  },
  {
    path: "/dashboard",
    element: <HomePage />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/project",
    element: <ProjectList />,
  },
  {
    path: "/createpass",
    element: <CreatePassword />,
  },
  {
    path: "/tasks",
    element: <ToDoList />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/adminpanel",
    element: <AdminDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} />
    {/* <App /> */}
  </>
  // {/* </React.StrictMode> */}
);
