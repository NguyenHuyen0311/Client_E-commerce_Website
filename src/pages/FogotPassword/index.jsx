import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function ForgotPassword() {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowPassword2, setIsShowPassword2] = useState(true);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-[600]">
            Đổi Mật Khẩu
          </h3>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-4 relative">
              <TextField
                className="w-full"
                name="password"
                id="password"
                type={isShowPassword ? "password" : "text"}
                label="Mật khẩu mới"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
              />

              <Button
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="!absolute top-[5px] right-[5px] !w-[30px] !h-[30px] !rounded-full !min-w-[30px] !text-black opacity-70"
              >
                {isShowPassword ? (
                  <>
                    <IoMdEyeOff className="text-[20px]" />
                  </>
                ) : (
                  <>
                    <IoMdEye className="text-[20px]" />
                  </>
                )}
              </Button>
            </div>

            <div className="relative form-group w-full mb-3">
              <TextField
                className="w-full"
                name="confirm_password"
                id="confirm_password"
                type={isShowPassword2 ? "password" : "text"}
                label="Xác nhận mật khẩu"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
              />

              <Button
                onClick={() => setIsShowPassword2(!isShowPassword2)}
                className="!absolute top-[5px] right-[5px] !w-[30px] !h-[30px] !rounded-full !min-w-[30px] !text-black opacity-70"
              >
                {isShowPassword2 ? (
                  <>
                    <IoMdEyeOff className="text-[20px]" />
                  </>
                ) : (
                  <>
                    <IoMdEye className="text-[20px]" />
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center mt-4 mb-3">
              <Button className="btn-org w-full">Xác nhận thay đổi</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
