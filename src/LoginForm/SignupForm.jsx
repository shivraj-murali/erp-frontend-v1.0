import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-mainBg h-screen">
      <h2 className="text-3xl font-playfair pt-12 text-center ">
        Login Into Your Account
      </h2>
      <p className="text-xl font-jakarta text-center py-5 ">Welcome Back</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 w-fit mx-auto p-12"
      >
        <div className="my-6">
          <p className="text-center">Email Address</p>
          <input
            type="text"
            className="text-black bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Enter your email-id"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <div className="my-5">
          <p className="text-center">Password</p>
          <input
            type="password"
            className="text-black bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Enter your password"
            {...register("Password", { required: true })}
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
