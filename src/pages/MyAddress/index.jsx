import React, { useContext, useEffect, useState } from "react";
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
import { Collapse } from "react-collapse";
import { myContext } from "../../App";
import {
  deleteData,
  editData,
  fetchDataFromApi,
  postData,
} from "../../utils/api";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function MyAddress() {
  const [addressFormMode, setAddressFormMode] = useState("");
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    mobile: "",
    address_details: "",
    position: "",
  });

  const context = useContext(myContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token === null) {
      history("/");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    fetchDataFromApi(`/api/address/get`, { withCredentials: true }).then(
      (res) => {
        if (res?.success) {
          setAddressList(res.address || []);
        }
      }
    );
  }, []);

  const validateValue = Object.values(formFields).every((el) => el);

  const handleAddSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Vui lòng nhập họ và tên!");
      return false;
    }

    if (formFields.mobile === "") {
      context.openAlertBox("error", "Vui lòng nhập số điện thoại!");
      return false;
    }

    if (formFields.address_details === "") {
      context.openAlertBox("error", "Vui lòng nhập địa chỉ cụ thể!");
      return false;
    }

    if (formFields.position === "") {
      context.openAlertBox("error", "Vui lòng chọn loại địa chỉ!");
      return false;
    }

    postData("/api/address/add", formFields, { withCredentials: true }).then(
      (res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);

          setFormFields({
            name: "",
            mobile: "",
            address_details: "",
            position: "",
          });

          setAddressList((prev) => [...prev, res?.data]);
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Vui lòng nhập họ và tên!");
      setIsLoading(false);
      return;
    }
    if (formFields.mobile === "") {
      context.openAlertBox("error", "Vui lòng nhập số điện thoại!");
      setIsLoading(false);
      return;
    }
    if (formFields.address_details === "") {
      context.openAlertBox("error", "Vui lòng nhập địa chỉ cụ thể!");
      setIsLoading(false);
      return;
    }
    if (formFields.position === "") {
      context.openAlertBox("error", "Vui lòng chọn loại địa chỉ!");
      setIsLoading(false);
      return;
    }

    editData(`/api/address/${selectedAddress._id}`, formFields, {
      withCredentials: true,
    }).then((res) => {
      setIsLoading(false);

      if (res?.error !== true) {
        context.openAlertBox("success", res?.data?.message);

        setAddressList((prev) =>
          prev.map((addr) =>
            addr._id === selectedAddress._id ? { ...addr, ...formFields } : addr
          )
        );

        setFormFields({
          name: "",
          mobile: "",
          address_details: "",
          position: "",
        });
        setSelectedAddress(null);
        setAddressFormMode("");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  const removeAddress = (id) => {
    deleteData(`/api/address/${id}`)
      .then((res) => {
        if (res?.success) {
          context.openAlertBox("success", res.message);
          fetchDataFromApi(`/api/address/get`, { withCredentials: true }).then(
            (res) => {
              if (res?.success) {
                setAddressList(res.address);
              }
            }
          );
        } else {
          context.openAlertBox("error", res.message || "Xóa thất bại!");
        }
      })
      .catch((err) => {
        context.openAlertBox("error", "Lỗi khi xóa địa chỉ!");
        console.error(err);
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
            <div className="flex items-center justify-between border-b !pb-2">
              <h2 className="text-[15px] font-[600]">Địa chỉ nhận hàng</h2>
              <Button onClick={() => setAddressFormMode("add")}>
                Thêm địa chỉ
              </Button>
            </div>

            {addressList.map((item, index) => (
              <div key={item._id} className="mt-5 border-b pb-3">
                <div className="flex items-center justify-between">
                  <div className="content-address">
                    <span className="bg-[#f1f1f1] text-black/70 text-xs px-2 py-1 rounded">
                      {item.position}
                    </span>
                    <p className="text-[14px] font-[500] mt-2">
                      {item.name} - {item.mobile}
                    </p>
                    <p className="text-[13px] text-gray-600 mt-1">
                      {item.address_details}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Tooltip title="Sửa" className="text-black/90 !text-[17px]">
                      <IconButton
                        onClick={() => {
                          setSelectedAddress(item);
                          setFormFields({
                            name: item.name,
                            mobile: item.mobile,
                            address_details: item.address_details,
                            position: item.position,
                          });
                          setAddressFormMode("edit");
                        }}
                      >
                        <FaEdit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Xóa" className="text-black/90 !text-[17px]">
                      <IconButton onClick={() => removeAddress(item?._id)}>
                        <FaTrash />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}

            <Collapse isOpened={addressFormMode === "add"}>
              <h3 className="text-[14px] font-[600] mt-5 w-full">
                Thêm địa chỉ mới
              </h3>
              <form className="mt-3" onSubmit={handleAddSubmit}>
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      className="w-full"
                      id="name"
                      name="name"
                      value={formFields.name}
                      disabled={isLoading === true ? true : false}
                      type="text"
                      label="Họ và Tên"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{
                        style: { fontSize: "14px" },
                      }}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className="w-[50%]">
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
                <div className="mt-3">
                  <TextField
                    id="outlined-basic"
                    label="Địa chỉ cụ thể"
                    name="address_details"
                    value={formFields.address_details}
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
                <div className="mt-3">
                  <FormControl component="fieldset">
                    <h3 className="text-[14px] font-[600]">Loại địa chỉ</h3>
                    <RadioGroup
                      name="position"
                      onChange={onChangeInput}
                      value={formFields.position}
                      row
                      className="flex items-center gap-3"
                    >
                      <FormControlLabel
                        value="Nhà"
                        control={<Radio />}
                        label="Nhà"
                      />
                      <FormControlLabel
                        value="Văn Phòng"
                        control={<Radio />}
                        label="Văn Phòng"
                      />
                      <FormControlLabel
                        value="Khác"
                        control={<Radio />}
                        label="Khác"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    disabled={!validateValue}
                    className="btn-org !px-5"
                  >
                    {isLoading === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Thêm địa chỉ"
                    )}
                  </Button>
                  <Button
                    onClick={() => setAddressFormMode("")}
                    className="btn-border"
                  >
                    Hủy
                  </Button>
                </div>
              </form>
            </Collapse>

            <Collapse isOpened={addressFormMode === "edit"}>
              <h3 className="text-[14px] font-[600] mt-5 w-full">
                Cập nhật địa chỉ
              </h3>
              <form className="mt-3" onSubmit={handleEditSubmit}>
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="Họ và tên"
                      variant="outlined"
                      size="small"
                      name="name"
                      fullWidth
                      value={formFields.name}
                      onChange={onChangeInput}
                      InputLabelProps={{ style: { fontSize: "14px" } }}
                    />
                  </div>
                  <div className="w-[50%]">
                    <TextField
                      label="Số điện thoại"
                      variant="outlined"
                      size="small"
                      name="mobile"
                      fullWidth
                      value={formFields.mobile}
                      onChange={onChangeInput}
                      InputLabelProps={{ style: { fontSize: "14px" } }}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <TextField
                    label="Địa chỉ cụ thể"
                    variant="outlined"
                    size="small"
                    name="address_details"
                    value={formFields.address_details}
                    onChange={onChangeInput}
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                  />
                </div>
                <div className="mt-3">
                  <FormControl component="fieldset">
                    <h3 className="text-[14px] font-[600]">Loại địa chỉ</h3>
                    <RadioGroup
                      name="position"
                      onChange={onChangeInput}
                      value={formFields.position}
                      row
                      className="flex items-center gap-3"
                    >
                      <FormControlLabel
                        value="Nhà"
                        control={<Radio />}
                        label="Nhà"
                      />
                      <FormControlLabel
                        value="Văn Phòng"
                        control={<Radio />}
                        label="Văn Phòng"
                      />
                      <FormControlLabel
                        value="Khác"
                        control={<Radio />}
                        label="Khác"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    disabled={!validateValue}
                    className="btn-org !px-5"
                  >
                    {isLoading === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Cập nhật địa chỉ"
                    )}
                  </Button>
                  <Button
                    onClick={() => setAddressFormMode("")}
                    className="btn-border"
                  >
                    Hủy
                  </Button>
                </div>
              </form>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAddress;
