import React, { useContext, useState } from "react";
import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";

function Verify() {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const history = useNavigate();
  const context = useContext(myContext);

  const verifyOTP = (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem("actionType");

    if(actionType !== "forgot-password") {
      postData("/api/user/verify", {
        email: localStorage.getItem("userEmail"),
        otp: otp
      }).then((res) => {
        if(res?.error === false) {
          context.openAlertBox("success", res?.message);
          localStorage.removeItem("userEmail")
          history("/login");
        } else {
          context.openAlertBox("error", res?.message);
        }
      })
    } else {
      postData("/api/user/verify-forgot-password-otp", {
        email: localStorage.getItem("userEmail"),
        otp: otp
      }).then((res) => {
        if(res?.error === false) {
          context.openAlertBox("success", res?.message);
          history("/forgot-password");
        } else {
          context.openAlertBox("error", res?.message);
        }
      })
    }
    
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" width="80px" />
          </div>

          <h3 className="text-center mb-2 mt-3 text-[15px] text-black font-[600]">
            Xác minh OTP
          </h3>

          <p className="text-center text-[13px] mb-4">
            OTP được gửi vào{" "}
            <span className="text-[#ff5252] mt-2 font-bold">
              {localStorage.getItem("userEmail")}
            </span>
          </p>

          <form onSubmit={verifyOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex items-center justify-center mt-5 px-1">
              <Button type="submit" className="w-full btn-org">
                Xác nhận OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Verify;
