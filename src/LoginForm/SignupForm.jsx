import  { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [password,setPassword]=useState("")

  const data=({email,password})
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) =>(setData(data));
  // const onSubmit = getLoginDetails;
  // console.log(errors);

  const getLoginDetails=async (e)=> {
    e.preventDefault()
    
    const response = await fetch("https://erp-auth.onrender.com/employee/signin", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);
    
    if((result.sucess)=="true"){
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
    }else{
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
   
  }



  return (
    <div className="bg-mainBg h-screen">
    <ToastContainer/>
      <h2 className="text-3xl font-playfair pt-12 text-center ">
        Login Into Your Account
      </h2>
      <p className="text-xl font-jakarta text-center py-5 ">Welcome Back</p>
      <form
        onSubmit={getLoginDetails}
        className="border-2 w-fit mx-auto p-12"
      >
        <div className="my-6">
          <p className="text-center">Email Address</p>
          <input
            type="email"
            name="email"
            className="text-red bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Enter your email-id" onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <p className="text-center">Password</p>
          <input
            type="password"
            className="text-red bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Enter your password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-5 my-4 inline-block"
        >
          Login Now
        </button>
        <button
          type="submit"
          className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  inline-block"
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
