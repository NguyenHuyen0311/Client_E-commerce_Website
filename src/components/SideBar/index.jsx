import React, { useContext, useEffect, useState } from "react";
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
import { myContext } from "../../App";
import { useLocation } from "react-router-dom";
import { postData } from "../../utils/api";

function SideBar(props) {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);

  const [filters, setFilters] = useState({
    catId: [],
    subCatId: [],
    thirdSubCatId: [],
    minPrice: "",
    maxPrice: "",
    rating: "",
    page: 1,
    limit: 8,
  });
  const [price, setPrice] = useState([0, 600000]);

  const context = useContext(myContext);
  const location = useLocation();

  const handleCheckboxChange = (field, value) => {
    setFilters((prev) => {
      const currentValues = prev[field] || [];
      const isChecked = currentValues.includes(value);
      let updatedValues;

      if (isChecked) {
        updatedValues = currentValues.filter((item) => item !== value);
      } else {
        updatedValues = [...currentValues, value];
      }

      const newFilters = {
        ...prev,
        [field]: updatedValues,
      };

      if (field === "catId") {
        newFilters.subCatId = [];
        newFilters.thirdSubCatId = [];
      }

      return newFilters;
    });
  };

  useEffect(() => {
    const url = window.location.href;
    const queryParams = new URLSearchParams(location.search);

    if (url.includes("catId")) {
      const categoryId = queryParams.get("catId");
      const catArr = [];
      catArr.push(categoryId);
      filters.catId = catArr;
      filters.subCatId = [];
      filters.thirdSubCatId = [];
      filters.rating = [];
    }

    if (url.includes("subCatId")) {
      const subCategoryId = queryParams.get("catId");
      const subCatArr = [];
      subCatArr.push(subCategoryId);
      filters.subCatId = subCatArr;
      filters.catId = [];
      filters.thirdSubCatId = [];
      filters.rating = [];
    }

    if (url.includes("thirdSubCatId")) {
      const thirdSubCategoryId = queryParams.get("thirdSubCatId");
      const thirdSubCatArr = [];
      thirdSubCatArr.push(thirdSubCategoryId);
      filters.thirdSubCatId = thirdSubCatArr;
      filters.catId = [];
      filters.subCatId = [];
      filters.rating = [];
    }

    filters.page = 1;

    setTimeout(() => {
      filtersData();
    }, 200);
  }, [location]);

  const filtersData = () => {
    props.setIsLoading(true);
    postData(`/api/product/filters`, filters).then((res) => {
      props.setProductsData(res);
      props.setIsLoading(false);
      props.setTotalPages(res?.totalPages);
      window.scrollTo(0, 0);
    });
  };

  useEffect(() => {
    filters.page = props.page;
    filtersData();
  }, [filters, props.page]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      minPrice: price[0],
      maxPrice: price[1],
    }));
  }, [price]);

  return (
    <aside className="sidebar sticky top-[170px] z-[99]">
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
              {context?.catData?.length !== 0 &&
                context?.catData?.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={item?._id}
                      control={<Checkbox size="small" />}
                      checked={filters?.catId?.includes(item?._id)}
                      label={item?.name}
                      onChange={() => handleCheckboxChange("catId", item?._id)}
                      className="w-full"
                    />
                  );
                })}
            </FormGroup>
          </div>
        </Collapse>
      </div>

      <div className="box mt-7">
        <h3 className="mb-5 text-[16px] font-[500] flex items-center pr-5">
          Lọc Theo Giá
        </h3>
        <RangeSlider
          step={5}
          value={price}
          onInput={setPrice}
          min={10000}
          max={600000}
        />
        <div className="flex pt-4 pb-2 price-range">
          <span className="text-[14px] font-[400]">
            Từ:{" "}
            <strong className="text-dark">
              {price[0].toLocaleString("vi-VN")}₫
            </strong>
          </span>
          <span className="ml-auto text-[14px] font-[400]">
            Đến:{" "}
            <strong className="text-dark">
              {price[1].toLocaleString("vi-VN")}₫
            </strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className="mb-2 text-[16px] font-[500] flex items-center pr-5">
          Lọc Theo Số Sao
        </h3>

        <FormGroup>
          <div className="w-full flex items-center">
            <FormControlLabel
              value={5}
              control={<Checkbox size="small" />}
              checked={filters?.rating?.includes(5)}
              onChange={() => handleCheckboxChange("rating", 5)}
            />
            <Rating name="rating" value={5} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel
              value={4}
              control={<Checkbox size="small" />}
              checked={filters?.rating?.includes(4)}
              onChange={() => handleCheckboxChange("rating", 4)}
            />
            <Rating name="rating" value={4} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel
              value={3}
              control={<Checkbox size="small" />}
              checked={filters?.rating?.includes(3)}
              onChange={() => handleCheckboxChange("rating", 3)}
            />
            <Rating name="rating" value={3} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel
              value={2}
              control={<Checkbox size="small" />}
              checked={filters?.rating?.includes(2)}
              onChange={() => handleCheckboxChange("rating", 2)}
            />
            <Rating name="rating" value={2} size="small" readOnly />
          </div>
          <div className="w-full flex items-center">
            <FormControlLabel
              value={1}
              control={<Checkbox size="small" />}
              checked={filters?.rating?.includes(1)}
              onChange={() => handleCheckboxChange("rating", 1)}
            />
            <Rating name="rating" value={1} size="small" readOnly />
          </div>
        </FormGroup>
      </div>
    </aside>
  );
}

export default SideBar;
