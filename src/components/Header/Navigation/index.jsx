import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegMinusSquare, FaShippingFast } from "react-icons/fa";
import { fetchDataFromApi } from "../../../utils/api";
import { myContext } from "../../../App";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [catData, setCatData] = useState([]);
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innersubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const context = useContext(myContext);
  
  useEffect(() => {
    setCatData(context?.catData);
  }, [context?.catData]);

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (innersubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 transition-all duration-300">
      <div className="container flex flex-col">
        <div className="flex items-center">
          <div className="w-[30%]">
            <div className="flex justify-between items-center py-2">
              <Button
                className="flex items-center link transition !text-black/90 !capitalize"
                onClick={() => setIsOpen(!isOpen)}
              >
                Các danh mục sản phẩm
                <FaAngleDown
                  className={`ml-2 pl-1 text-[17px] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </div>
          </div>
          <div className="w-[50%]">
            <ul className="flex items-center gap-10 mr-1">
              <li>
                <Link to="/" className="text-[14.5px] hover:text-[#ff5252]">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/product-list"
                  className="text-[14.5px] hover:text-[#ff5252]"
                >
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[14.5px] hover:text-[#ff5252]">
                  Bài viết
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[14.5px] hover:text-[#ff5252]"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[20%]">
            <p className="text-[14px] flex items-center gap-2">
              <FaShippingFast className="text-[18px]" /> Chỉ ship trong khu vực
              Hà Nội
            </p>
          </div>
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 duration-0"
          }`}
        >
          <ul className="py-2 flex flex-wrap">
            {catData?.length !== 0 &&
              catData?.map((cat, index) => {
                const isLast = index === catData.length - 1;
                return (
                  <li
                    key={index}
                    className={`list-none flex items-center px-2 relative w-[33.33333%] flex-col ${isLast ? "" : "border-r"}`}
                  >
                    <Link to="/product-list" className="w-full">
                      <Button className="w-full !normal-case !text-left !justify-start !px-3 !text-black/80">
                        {cat?.name}
                      </Button>
                    </Link>

                    {cat?.children?.length > 0 &&
                      (subMenuIndex === index ? (
                        <FaRegMinusSquare
                          className="absolute top-[10px] right-[15px] cursor-pointer"
                          onClick={() => openSubMenu(index)}
                        />
                      ) : (
                        <FiPlusSquare
                          className="absolute top-[10px] right-[15px] cursor-pointer"
                          onClick={() => openSubMenu(index)}
                        />
                      ))}

                    {subMenuIndex === index && (
                      <ul className="submenu w-full pl-3">
                        {cat?.children?.length !== 0 &&
                          cat?.children?.map((subCat, index_) => {
                            return (
                              <li key={index_} className="list-none relative">
                                <Link to="/product-list" className="w-full">
                                  <Button className="w-full !normal-case !text-left !justify-start !px-3 !text-black/80">
                                    {subCat?.name}
                                  </Button>
                                </Link>

                                {subCat?.children?.length > 0 &&
                                  (innersubMenuIndex === index_ ? (
                                    <FaRegMinusSquare
                                      className="absolute top-[10px] right-[15px] cursor-pointer"
                                      onClick={() => openInnerSubMenu(index_)}
                                    />
                                  ) : (
                                    <FiPlusSquare
                                      className="absolute top-[10px] right-[15px] cursor-pointer"
                                      onClick={() => openInnerSubMenu(index_)}
                                    />
                                  ))}

                                {innersubMenuIndex === index_ && (
                                  <ul className="inner_submenu w-full pl-3">
                                    {subCat?.children?.length !== 0 &&
                                      subCat?.children?.map(
                                        (thirdLevelCat, index__) => {
                                          return (
                                            <li
                                              key={index__}
                                              className="list-none relative"
                                            >
                                              <Link
                                                to="/product-list"
                                                className="w-full"
                                              >
                                                <Button className="w-full !normal-case !text-left !justify-start !px-3 !text-black/80">
                                                  {thirdLevelCat?.name}
                                                </Button>
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
