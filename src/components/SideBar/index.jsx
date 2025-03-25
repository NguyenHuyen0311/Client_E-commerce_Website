import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SideBar.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

function SideBar() {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);

  return (
    <aside className="sidebar">
      <div className="box">
        <h3 className="mb-3 text-[16px] font-[500] flex items-center pr-5">
          Lọc Theo Danh Mục
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-1">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Đồ Ăn Nhẹ"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Đồ Ăn Vặt Khô"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Bộ Trà Sữa"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Chè & Món Tráng Miệng"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Trà"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Ăn Vặt Khỏe Mạnh"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>

      <div className="box mt-7">
        <h3 className="mb-5 text-[16px] font-[500] flex items-center pr-5">
          Lọc Theo Giá
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 price-range">
          <span className="text-[14px] font-[400]">
            Từ: <strong className="text-dark">{0}</strong>
          </span>
          <span className="ml-auto text-[14px] font-[400]">
            Đến: <strong className="text-dark">{200000}đ</strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="mb-2 text-[16px] font-[500] flex items-center pr-5">
          Lọc Theo Số Sao
        </h3>

        <FormGroup>
          <div className="w-full flex items-center">
            <FormControlLabel control={<Checkbox size="small" />} />
            <Rating name="size-small" defaultValue={5} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel control={<Checkbox size="small" />} />
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel control={<Checkbox size="small" />} />
            <Rating name="size-small" defaultValue={3} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel control={<Checkbox size="small" />} />
            <Rating name="size-small" defaultValue={2} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel control={<Checkbox size="small" />} />
            <Rating name="size-small" defaultValue={1} size="small" readOnly />
          </div>
        </FormGroup>
      </div>
    </aside>
  );
}

export default SideBar;
