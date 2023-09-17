import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigation } from "react-router-dom";
import axios from "axios";

const CreateOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  async function handleGenerateOTP(e) {
    e.preventDefault();
    setIsClicked(true);

    const res = await axios.post(
      "https://erp-auth.onrender.com/employee/sendotp",
      { email }
    );
  }

  async function handleVerifyOtp(e) {
    const otpa = parseInt(otp);
    const data = { email, otp: otpa };
    e.preventDefault();
    const response = await fetch(
      "https://erp-auth.onrender.com/employee/authotp",
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
      toast.success("OTP Verified Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("email", JSON.stringify(email));
    } else {
      toast.error("Invalid Otp", {
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
      <ToastContainer />
      <h2 className="text-3xl font-playfair pt-12 text-center ">
        Forgot Password
      </h2>
      <p className="text-xl font-jakarta text-center py-5 ">Welcome Back</p>
      <form className="border-2 w-fit mx-auto p-12 rounded-md">
        <div className="my-6">
          <p className="text-center">Email Address</p>

          <input
            type="email"
            name="email"
            className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
            placeholder="Enter your email-id"
            onChange={(e) => setEmail(e.target.value)}
          />
          {isClicked ? (
            <div> </div>
          ) : (
            <button
              className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center flex mx-auto my-4"
              onClick={handleGenerateOTP}
            >
              Generate OTP
            </button>
          )}

          {isClicked ? (
            <div className="my-6">
              <p className="text-center">Enter OTP</p>

              <input
                type="email"
                name="email"
                className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
                placeholder="Enter your OTP here"
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center flex mx-auto my-4"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateOTP;

// <div className="bg-mainBg h-screen">
//   <ToastContainer />
//   <h2 className="text-3xl font-playfair pt-12 text-center ">
//     Forgot Password
//   </h2>
//   <p className="text-xl font-jakarta text-center py-5 ">Welcome Back</p>
//   <form onSubmit={getLoginDetails} className="border-2 w-fit mx-auto p-12">
//     <div className="my-6">
//       {isClicked ? (
//         <>
// <div className="my-6">
//   <p className="text-center">Email Address</p>

//   <input
//     type="email"
//     name="email"
//     className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
//     placeholder="Enter your email-id"
//     onChange={(e) => setEmail(e.target.value)}
//   />
// </div>
//           <p className="text-center">OTP</p>
//           <input
//             type="email"
//             name="email"
//             className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
//             placeholder="Enter your OTP here"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           isClicked ? (<button>Verify OTP</button>) : (
//           <button>Generate OTP</button>)
//         </>
//       ) : (
// <div className="my-6">
//   <p className="text-center">Email Address</p>

//   <input
//     type="email"
//     name="email"
//     className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
//     placeholder="Enter your email-id"
//     onChange={(e) => setEmail(e.target.value)}
//   />
// </div>
//       )}
//     </div>
//   </form>
// </div>
