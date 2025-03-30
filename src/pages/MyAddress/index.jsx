import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSideBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function MyAddress() {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col-1 w-[25%]">
          <AccountSidebar />
        </div>

        <div className="col-2 w-[75%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="text-[15px] font-[600] border-b pb-3">
              Địa chỉ nhận hàng
            </h2>

            <div className="mt-5 border-b pb-3">
              <div className="flex items-center justify-between">
                <div className="content-address">
                  <span className="bg-[#f1f1f1] text-black/70 text-xs px-2 py-1 rounded">
                    Home
                  </span>
                  <p className="text-[14px] font-[500] mt-2">
                    Nguyễn Thị Huyền - 0966556026
                  </p>
                  <p className="text-[13px] text-gray-600 mt-1">
                    306 Đường Mỹ Đình, Nam Từ Liêm, Hà Nội
                  </p>
                </div>
                <div className="flex gap-1">
                  <Tooltip title="Sửa" className="text-black/90 !text-[17px]">
                    <IconButton>
                      <FaEdit />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Xóa" className="text-black/90 !text-[17px]">
                    <IconButton>
                      <FaTrash />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>

            <h3 className="text-[14px] font-[600] mt-5 text-center w-full">
              Thêm địa chỉ mới
            </h3>
            <form className="mt-3">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Họ và tên"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                  />
                </div>
              </div>
              <div className="mt-3">
                <TextField
                  label="Địa chỉ cụ thể"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />
              </div>
              <div className="mt-3">
                <FormControl component="fieldset">
                  <h3 className="text-[14px] font-[600]">Loại địa chỉ</h3>
                  <RadioGroup row className="flex items-center gap-3">
                    <FormControlLabel
                      value="home"
                      control={<Radio />}
                      label="Nhà"
                    />
                    <FormControlLabel
                      value="office"
                      control={<Radio />}
                      label="Văn Phòng"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Khác"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="flex items-center">
                <Button className="btn-org !px-5">Thêm địa chỉ</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAddress;
