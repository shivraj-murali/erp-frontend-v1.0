import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordV, setPasswordV] = useState("");
  const navigate=useNavigate()

  async function handleChangePassword(e) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    console.log(email);
    if (password.length > 0) {
      if (password === passwordV) {
        const data = { email: JSON.parse(email), password };
        const response = await fetch(
          "https://erp-auth.onrender.com/employee/genpass",
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
          navigate("/dashboard")
        }
        // else {
        //   toast.error("Please verify your password", {
        //     position: "top-right",
        //     autoClose: 1500,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //   });
        // }
      } else {
        toast.error("Please verify your password", {
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
    }
  }
  return (
    <div className="bg-mainBg h-screen">
      <ToastContainer />
      <h2 className="text-3xl font-playfair pt-12 text-center pb-8">
        Create New Password
      </h2>

      <form className="border-2 w-fit mx-auto p-12">
        <div className="my-6">
          <p className="text-center"> Enter Password </p>
          <input
            type="password"
            name="email"
            className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-6">
          <p className="text-center"> Re-Enter Password </p>
          <input
            type="password"
            name="email"
            className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Re-Enter Password "
            onChange={(e) => setPasswordV(e.target.value)}
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center flex mx-auto my-4"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default CreatePassword;
