import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OtpInput from "react-otp-input";
const CreateOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();

  function Button() {
    return (
      <button
        className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center flex mx-auto my-4"
        onClick={handleGenerateOTP}
      >
        Generate OTP
      </button>
    );
  }

  async function handleGenerateOTP(e) {
    e.preventDefault();
    setIsClicked(true);

    if (email.length > 0) {
      const response = await fetch(
        "https://erp-auth.onrender.com/employee/sendotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      console.log(typeof result.sucess);

      if (result.sucess == "true") {
        setIsTrue(true);
        localStorage.setItem('email',(email))
      } else {
        toast.error("Enter a valid email", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // setInterval(() => window.location.reload(), 3000);
      }
    } else {
      toast.error("Enter a valid email", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsClicked(false);
      setIsTrue(false);
    }
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
      localStorage.setItem("emp_id", result.emp_id);
      localStorage.setItem("emp_name", result.employee_name);
      navigate("/createpass");
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
            required
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

          {isClicked && isTrue ? (
            <div className="my-6">
              <p className="text-center">Enter OTP</p>

              {/* <input
                type="email"
                name="email"
                className="text-green bg-lightBg mx-auto flex p-2 my-auto text-center mt-3"
                placeholder="Enter your OTP here"
                onChange={(e) => setOtp(e.target.value)}
              /> */}
              <div className="mt-2">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span className="mx-2">-</span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    color: "black",
                    margin: "0 auto",
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    fontSize: "24px",
                  }}
                  containerStyle={{ padding: "10px" }}
                  shouldAutoFocus={true}
                />
              </div>
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
