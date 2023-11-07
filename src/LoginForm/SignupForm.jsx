import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const SignupForm = () => {
  const [verified, setVerified] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = { email, password };

  const getLoginDetails = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://erp-auth.onrender.com/employee/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    console.log(result);

    if (result.sucess == "true") {
      localStorage.setItem("emp_id", result.emp_id);
      localStorage.setItem("emp_name", result.employee_name);

      toast.success(result.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/dashboard");
    } else {
      setVerified(false);
      toast.error(result.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="bg-mainBg h-screen">
      <ToastContainer />
      <h2 className="text-3xl font-playfair pt-12 text-center ">
        Login Into Your Account
      </h2>
      <p className="text-xl font-jakarta text-center py-5 ">Welcome Back</p>
      <form onSubmit={getLoginDetails} className="border-2 w-fit mx-auto p-12">
        <div className="my-6">
          <p className="text-center"> Email Address </p>
          {verified ? (
            <input
              type="email"
              name="email"
              className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
              placeholder="Enter your email-id"
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <input
              type="email"
              name="email"
              className="text-red bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
              placeholder="Enter your email-id"
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
        </div>
        <div className="my-5">
          <p className="text-center">Password</p>
          {verified ? (
            <input
              type="password"
              className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <input
              type="password"
              className="text-red bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-5 my-4 inline-block"
        >
          Employee Login
        </button>

        <Link to="/forgotpassword">
          <button className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  inline-block">
            Forgot Password
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
