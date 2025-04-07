import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSideBar";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { editData } from "../../utils/api";
import { CircularProgress } from "@mui/material";

function MyAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const context = useContext(myContext);
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token === null) {
      history("/");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      });
    }
  }, [context?.userData]);

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

    if (formFields.name === "") {
      context.openAlertBox("error", "Vui lòng nhập họ và tên!");
      return false;
    }

    if (formFields.email === "") {
      context.openAlertBox("error", "Vui lòng nhập email!");
      return false;
    }

    if (formFields.mobile === "") {
      context.openAlertBox("error", "Vui lòng nhập số điện thoại!");
      return false;
    }

    editData(`/api/user/${userId}`, formFields).then((res) => {
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.data?.message);
      } else {
        context.openAlertBox("error", res?.data?.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col-1 w-[25%]">
          <AccountSidebar />
        </div>

        <div className="col-2 w-[75%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="text-[15px] font-[600] border-b pb-3">
              Trang cá nhân
            </h2>

            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Họ và tên"
                    variant="outlined"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    name="email"
                    value={formFields.email}
                    disabled={true}
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-[49%]">
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    name="mobile"
                    value={formFields.mobile}
                    disabled={isLoading === true ? true : false}
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="flex items-center mt-5">
                <Button
                  type="submit"
                  disabled={!validateValue}
                  className="btn-org !px-5"
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Lưu thay đổi"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
