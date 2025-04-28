import React, { useContext, useState } from "react";
import "./search.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";
import { myContext } from "../../App";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(myContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const search = () => {
    setIsLoading(true);

    const obj = {
      page: 1,
      limit: 10,
      query: searchQuery,
    };

    if (searchQuery !== "") {
      postData(`/api/product/search`, obj).then((res) => {
        context?.setSearchData(res);
        setTimeout(() => {
          setIsLoading(false);
          history("/search");
        }, 500);
      });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#f2f2f2] rounded-[10px] relative">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm, thương hiệu,..."
        className="w-[100%] h-[100%] pl-[20px] pr-[40px] bg-[#f2f2f2] rounded-[10px] focus:outline-none"
        onChange={onChangeInput}
        value={searchQuery}
      />
      <Button
        onClick={search}
        className="searchButton !absolute top-0 right-0 h-[100%] w-[40px] !bg-[#ff5252] rounded-[10px] hover:!bg-[#fc6868] transition-colors duration-300 ease-in-out"
      >
        {isLoading === true ? (
          <CircularProgress className="!text-white" />
        ) : (
          <IoSearch className="text-white size-5" />
        )}
      </Button>
    </div>
  );
}

export default Search;
