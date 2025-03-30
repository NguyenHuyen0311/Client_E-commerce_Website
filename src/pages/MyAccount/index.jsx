import React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import MyAccountSidebar from "../../components/AccountSideBar";

function MyAccount() {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col-1 w-[25%]">
          <MyAccountSidebar />
        </div>

        <div className="col-2 w-[75%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="text-[15px] font-[600] border-b pb-3">Trang cá nhân</h2>
          
            <form className="mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Họ và tên"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-[48.5%]">
                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center mt-5">
                <Button className="btn-org !px-5">Lưu thay đổi</Button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
