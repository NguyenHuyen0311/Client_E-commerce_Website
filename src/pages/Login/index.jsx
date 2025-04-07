import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const [isShowPassword, setIsShowPassword] = useState(true);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const context = useContext(myContext);
  const history = useNavigate();

  const forgotPassword = () => {
    history("/verify");
    context.openAlertBox("success", "Mã OTP đã được gửi!");
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validateValue = Object.values(formFields).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.email === "") {
      context.openAlertBox("error", "Vui lòng nhập email!");
      return false;
    }

    if (formFields.password === "") {
      context.openAlertBox("error", "Vui lòng nhập mật khẩu!");
      return false;
    }

    postData("/api/user/login", formFields).then((res) => {
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.message);

        setFormFields({
          email: "",
          password: "",
        });

        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);

        context.setIsLogin(true);

        history("/");
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-[600]">
            Đăng Nhập
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                className="w-full"
                id="email"
                name="email"
                value={formFields.email}
                disabled={isLoading===true ? true : false}
                type="email"
                label="Email"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                onChange={onChangeInput}
              />
            </div>

            <div className="relative form-group w-full mb-3">
              <TextField
                className="w-full"
                name="password"
                value={formFields.password}
                disabled={isLoading===true ? true : false}
                id="password"
                type={isShowPassword ? "password" : "text"}
                label="Mật khẩu"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                onChange={onChangeInput}
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

            <a
              onClick={forgotPassword}
              className="link cursor-pointer text-[13px] font-[500]"
            >
              Quên mật khẩu
            </a>

            <div className="flex items-center mt-4 mb-3">
              <Button
                type="submit"
                disabled={!validateValue}
                className="btn-org w-full flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Đăng nhập"
                )}
              </Button>
            </div>

            <div className="flex items-center my-5">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm">HOẶC</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <Button className="gap-2 !mb-4 w-full !text-black/80 !font-[500] !bg-[#f1f1f1] flex items-center justify-center">
              <FcGoogle className="text-[20px]" />
              Đăng nhập với Google
            </Button>

            <p className="text-[14px] w-full font-[400] flex items-center justify-center gap-2">
              Bạn chưa có tài khoản?
              <Link
                className="link cursor-pointer !text-[14px] !font-[600] !text-[#ff5252] !no-underline"
                to="/register"
              >
                Đăng Ký
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
