import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-[600]">
            Đăng Ký
          </h3>

          <form className="w-full mt-5">
          <div className="form-group w-full mb-5">
              <TextField
                className="w-full"
                id="name"
                type="text"
                label="Họ và Tên *"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
              />
            </div>

            <div className="form-group w-full mb-5">
              <TextField
                className="w-full"
                id="email"
                type="email"
                label="Email *"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
              />
            </div>

            <div className="relative form-group w-full mb-5">
              <TextField
                className="w-full"
                id="password"
                type={isShowPassword ? "password" : "text"}
                label="Mật khẩu *"
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

            <div className="flex items-center mt-4 mb-3">
              <Button className="btn-org w-full">Đăng ký</Button>
            </div>

            <p className="text-[14px] w-full font-[400] flex items-center justify-center gap-2">
              Bạn đã có tài khoản?
              <Link
                className="link cursor-pointer !text-[14px] !font-[600] !text-[#ff5252] !no-underline"
                to="/login"
              >
                Đăng Nhập
              </Link>
            </p>

            <div className="flex items-center my-5">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm">HOẶC</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <Button className="gap-2 !mb-4 w-full !text-black/80 !font-[500] !bg-[#f1f1f1] flex items-center justify-center">
              <FcGoogle className="text-[20px]" />
              Đăng nhập với Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
