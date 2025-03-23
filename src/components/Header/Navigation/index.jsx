import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegMinusSquare } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => {
      if (prev.includes(category)) {
        const categoryData = categories.find(c => c.path === category);
        const subcategories = categoryData?.subcategories || [];
        
        const pathsToRemove = [
          category,
          ...subcategories.map(sub => sub.path),
          ...subcategories
            .filter(sub => sub.subcategories)
            .flatMap(sub => sub.subcategories.map(subSub => subSub.path))
        ];
        
        return prev.filter(c => !pathsToRemove.includes(c));
      }
      
      return [...prev, category];
    });
  };

  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
    setOpenSubMenu(null);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const handleSubMenuEnter = (submenu) => {
    setOpenSubMenu(submenu);
  };

  const categories = [
    {
      name: "Đồ ăn vặt mặn",
      path: "/do-an-vat-man",
      subcategories: [
        { 
          name: "Bánh tráng các loại", 
          path: "/banh-trang-cac-loai",
          subcategories: [
            { name: "Bánh tráng mắm ruốc", path: "/banh-trang-mam-ruoc" },
            { name: "Bánh tráng trộn", path: "/banh-trang-tron" },
            { name: "Bánh tráng cuốn", path: "/banh-trang-cuon" },
            { name: "Bánh tráng phơi sương", path: "/banh-trang-phoi-suong" },
          ],
        },
        { name: "Đồ khô & sấy giòn", path: "/do-kho-&-say-gion" },
        { name: "Hải sản khô rim & mắm", path: "/hai-san-kho-rim-&-mam" },
        { name: "Nem, chả, tré", path: "/nem-cha-tre" },
        { name: "Đậu phộng & snack giòn", path: "/dau-phong-&-snack-gion" },
      ],
    },
    {
      name: "Đồ ăn vặt ngọt",
      path: "/do-an-vat-ngot",
      subcategories: [
        { name: "Bánh & kẹo ngọt", 
          path: "/banh-&-keo-ngot",
          subcategories: [
            { name: "Bánh quy & bánh ngọt", path: "/banh-quy-&-banh-ngot" },
            { name: "Kẹo & kẹo mút", path: "/keo-&-keo-mut" },
            { name: "Bánh gato & bánh kem", path: "/banh-gato-&-banh-kem" },
            { name: "Bánh bao & bánh tiêu", path: "/banh-bao-&-banh-tieu" },
          ], 
        },
        { name: "Mứt & trái cây sấy dẻo", path: "/mut-&-trai-cay-say-deo" },
        { name: "Trà sữa & topping ăn vặt", path: "/tra-sua-&-topping-an-vat" },
        {
          name: "Chè & đồ ngọt truyền thống",
          path: "/che-&-do-ngot-truyen-thong",
        },
        {
          name: "Socola & các loại hạt phủ ngọt",
          path: "/socola-&-cac-loai-hat-phu-ngot",
        },
      ],
    },
    {
      name: "Đồ khô & hạt dinh dưỡng",
      path: "/do-kho-&-hat-dinh-duong",
      subcategories: [
        { name: "Các loại hạt dinh dưỡng", path: "/cac-loai-hat-dinh-duong" },
        { name: "Đậu & ngũ cốc khô", path: "/dau-&-ngu-coc-kho" },
        { name: "Trái cây sấy khô", path: "/trai-cay-say-kho" },
        {
          name: "Rong biển & thực phẩm khô",
          path: "/rong-bien-&-thuc-pham-kho",
        },
        { name: "Hạt và trái cây mix", path: "/hat-va-trai-cay-mix" },
      ],
    },
    {
      name: "Đồ uống & trà sữa",
      path: "/do-uong-&-tra-sua",
      subcategories: [
        { name: "Trà sữa & topping", path: "/tra-sua-&-topping" },
        { name: "Trà & nước giải khát", path: "/tra-&-nuoc-giai-khat" },
        { name: "Nước ép & sinh tố", path: "/nuoc-ep-&-sinh-to" },
        { name: "Cà phê & sữa hạt", path: "/ca-phe-&-sua-hat" },
        { name: "Nước ngọt & nước có ga", path: "/nuoc-ngot-&-nuoc-co-ga" },
      ],
    },
  ];

  return (
    <nav className="bg-white border-b-[1px] border-gray-200 transition-all duration-300">
      <div className="container flex flex-col">
        <div className="flex items-center">
          <div className="col-1 w-[25%]">
            <div className="flex justify-between items-center py-2">
              <Button
                className="flex items-center link transition !text-black/90 !capitalize"
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen) {
                    setExpandedCategories([]); // Clear all expanded categories when closing
                  }
                }}
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
          <div className="col-2 w-[60%]">
            <ul className="flex items-center !gap-10 mr-1">
              <li className="list-none">
                <Link to="/" className="link transition text-[14.5px] hover:text-[#ff5252]">
                  Trang chủ
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14.5px] hover:text-[#ff5252]">
                  Cửa hàng
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14.5px] hover:text-[#ff5252]">
                  Giới thiệu
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14.5px] hover:text-[#ff5252]">
                  Bài viết
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14.5px] hover:text-[#ff5252]">
                  Liên hệ
                </Link>
              </li>

              {/* {categories.map((category) => (
                <li
                  key={category.name}
                  className="relative list-none cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={category.path}
                    className="link transition !text-[14.5px] !bg-transparent hover:text-[#ff5252] hover:!bg-transparent"
                  >
                    {category.name}
                  </Link>

                  {openMenu && (
                    <div className="absolute left-0 w-full h-3 bg-transparent"></div>
                  )}

                  {openMenu === category.name && category.subcategories && (
                    <div className="absolute left-0 mt-3.5 w-48 bg-white shadow-lg rounded-md z-50">
                      <ul className="py-2">
                        {category.subcategories.map((sub) => (
                          <li
                            key={sub.name}
                            className="relative"
                            onMouseEnter={() =>
                              sub.subcategories && handleSubMenuEnter(sub.name)
                            }
                            onMouseLeave={() => setOpenSubMenu(null)}
                          >
                            <Link
                              to={sub.path}
                              className="block px-4 py-2 !text-[14.5px] !bg-transparent hover:text-[#ff5252] hover:!bg-transparent"
                            >
                              {sub.name}
                            </Link>

                            {openSubMenu && (
                              <div className="absolute left-full top-0 ml-[-4px] w-4 h-full bg-transparent"></div>
                            )}

                            {openSubMenu === sub.name && sub.subcategories && (
                              <div className="absolute left-full top-0 ml-2 w-48 bg-white shadow-lg rounded-md z-50">
                                <ul className="py-2">
                                  {sub.subcategories.map((subSub) => (
                                    <li key={subSub.name}>
                                      <Link
                                        to={subSub.path}
                                        className="block px-4 py-2 !text-[14.5px] !bg-transparent hover:text-[#ff5252] hover:!bg-transparent"
                                      >
                                        {subSub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))} */}
            </ul>
          </div>
          <div className="col-2 w-[15%]">
            <p className="text-[14px] font-[400] flex items-center gap-2">
              <FaShippingFast className="text-[18px]" /> Chỉ ship trong khu vực Hà Nội
            </p>
          </div>
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 duration-0"
          }`}
        >
          <ul className="py-2 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.name} className="flex flex-col w-[30%] border-r border-gray-200 pr-2">
                <div
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  onClick={() => toggleCategory(category.path)}
                >
                  <span className="text-black/70">{category.name}</span>
                  <div className="transition-transform duration-300">
                    {expandedCategories.includes(category.path) ? (
                      <FaRegMinusSquare className="text-[14px] transform transition-all duration-300" />
                    ) : (
                      <FiPlusSquare className="text-[14px] transform transition-all duration-300" />
                    )}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedCategories.includes(category.path)
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="bg-gray-50">
                    {category.subcategories.map((sub) => (
                      <li key={sub.name}>
                        {sub.subcategories ? (
                          <>
                            <div
                              className="flex items-center justify-between px-8 py-2 text-black/70 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(sub.path);
                              }}
                            >
                              <span>{sub.name}</span>
                              <div className="transition-transform duration-300">
                                {expandedCategories.includes(sub.path) ? (
                                  <FaRegMinusSquare className="text-[14px] transform transition-all duration-300 rotate-180" />
                                ) : (
                                  <FiPlusSquare className="text-[14px] transform transition-all duration-300 rotate-0" />
                                )}
                              </div>
                            </div>
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                expandedCategories.includes(sub.path)
                                  ? "max-h-[500px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <ul className="bg-gray-100">
                                {sub.subcategories.map((subSub) => (
                                  <li key={subSub.name}>
                                    <Link
                                      to={subSub.path}
                                      className="block px-12 py-2 text-black/70 hover:bg-gray-200 transition-colors duration-200"
                                    >
                                      {subSub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <Link
                            to={sub.path}
                            className="block px-8 py-2 text-black/70 hover:bg-gray-100 transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
