import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPasswordPage = () => {
  const [isClicked, setIsCLicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  function onClick() {
    setIsCLicked(!isClicked);
  }

  return (
    <div>
      <div className="bg-mainBg h-screen">
        <h2 className="text-3xl font-playfair pt-12 text-center ">
          Forgot Password
        </h2>
        <p className="text-xl font-jakarta text-center py-5 ">
          Verify Yourself Please
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 w-fit mx-auto p-12"
        >
          {isClicked ? (
            <>
              <div className="my-5">
                <p className="text-center">Enter OTP</p>
                <input
                  type="password"
                  className="text-black bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
                  placeholder="Enter your OTP"
                  {...register("Password", { required: true })}
                />
              </div>
              <button
                className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center block mx-auto"
                type="submit"
              >
                Verify Now
              </button>
            </>
          ) : (
            <>
              <div className="my-6">
                <p className="text-center"> Enter your Email</p>
                <input
                  type="text"
                  className="text-black bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
                  placeholder="Enter your email-id"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
              <button
                onClick={onClick}
                className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center block mx-auto"
              >
                Generate Otp
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
