import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoMdCloudUpload } from "react-icons/io";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadImage } from "../../utils/api";

function AccountSidebar() {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const context = useContext(myContext);

  useEffect(() => {
    const userAvatar = [];

    if (
      context?.userData?.avatar !== "" &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  let selectedImages = [];

  const formdata = new FormData();

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      setPreviews([]);

      const files = e.target.files;
      setUploading(true);

      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];

          selectedImages.push(file);
          formdata.append(`avatar`, file);
        } else {
          context.openAlertBox(
            "error",
            "Vui lòng chọn ảnh kiểu JPEG, JPG, PNG hoặc WEBP!"
          );
          setUploading(false);
          return false;
        }
      }

      uploadImage("/api/user/user-avatar", formdata).then((res) => {
        setUploading(false);

        let avatar = [];
        avatar.push(res?.data?.avatar);
        setPreviews(avatar);

        context.setUserData((prev) => ({
          ...prev,
          avatar: avatar,
        }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[160px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="group flex items-center justify-center bg-gray-200 w-[100px] h-[100px] cursor-pointer overflow-hidden bg-center relative mb-4 rounded-full">
          {uploading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews?.length !== 0 ? (
                previews?.map((img, index) => {
                  return (
                    <img
                      src={img}
                      key={index}
                      className="w-full h-full object-cover"
                    />
                  );
                })
              ) : (
                <img
                  src="/user-avatar-default.png"
                  className="w-full h-full object-cover"
                />
              )}
            </>
          )}

          <div className="upload-avatar group-hover:opacity-100 opacity-0 transition-all absolute w-full h-full top-0 left-0 flex items-center justify-center rounded-full bg-black/70">
            <IoMdCloudUpload className="text-[#fff] text-[25px]" />
            <input
              type="file"
              accept="image/*"
              className="absolute cursor-pointer w-full h-full top-0 left-0 opacity-0"
              onChange={(e) => {
                onChangeFile(e, "/api/user/user-avatar");
              }}
              name="avatar"
            />
          </div>
        </div>

        <h3 className="text-[15px] text-black/80 font-[600]">
          {context?.userData?.name}
        </h3>
        <span className="text-[12px] text-black/70 font-[500] normal-case text-left justify-start">
          {context?.userData?.email}
        </span>
      </div>

      <ul className="my-account-tabs list-none pb-0 bg-[#f1f1f1] flex flex-col">
        <li className="w-full">
          <NavLink to="/my-account" activeClassName="isActive">
            <div className="w-full">
              <Button className="w-full !px-5 !py-2 flex !text-left !items-center !justify-start gap-2 !rounded-none transition-all duration-300">
                <FaRegUser className="text-[13px] text-black/80" />
                <span className="text-[13px] font-[600] !text-black/80 normal-case">
                  Tài khoản
                </span>
              </Button>
            </div>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-address" activeClassName="isActive">
            <Button className="w-full !px-5 !py-2  flex !text-left !items-center !justify-start gap-2 !rounded-none transition-all duration-300">
              <IoLocationOutline className="text-[13px] text-black/80" />
              <span className="text-[13px] mt-1 font-[600] !text-black/80 normal-case">
                Địa chỉ
              </span>
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" activeClassName="isActive">
            <Button className="w-full !px-5 !py-2  flex !text-left !items-center !justify-start gap-2 !rounded-none transition-all duration-300">
              <IoBagCheckOutline className="text-[13px] text-black/80" />
              <span className="text-[13px] mt-1 font-[600] !text-black/80 normal-case">
                Đơn đặt hàng
              </span>
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-wishlist" activeClassName="isActive">
            <Button className="w-full !px-5 !py-2  flex !text-left !items-center !justify-start gap-2 !rounded-none transition-all duration-300">
              <FaRegHeart className="text-[13px] text-black/80" />
              <span className="text-[13px] mt-1 font-[600] !text-black/80 normal-case">
                Danh sách yêu thích
              </span>
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <Button className="w-full !px-5 !py-2  flex !text-left !items-center !justify-start gap-2 !rounded-none transition-all duration-300">
            <IoIosLogOut className="text-[13px] text-black/80" />
            <span className="text-[13px] mt-1 font-[600] !text-black/80 normal-case">
              Đăng xuất
            </span>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default AccountSidebar;
