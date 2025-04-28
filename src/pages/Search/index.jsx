import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import ProductLoadingGrid from "../../components/ProductLoading/productLoadingGrid";
import { postData } from "../../utils/api";

function SearchPage() {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [productsData, setProductsData] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]); // lưu bản gốc
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSortValue, setSelectedSortValue] = useState("Sắp xếp theo");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortBy = (name, order, products, value) => {
    setSelectedSortValue(value);
    postData(`/api/product/sortBy`, {
      products: products,
      sortBy: name,
      order: order,
    }).then((res) => {
      setProductsData(res);
      setAnchorEl(null);
    });
  };

  return (
    <section className="pt-5 bg-white">
      <div className="bg-white p-2">
        <div className="container flex gap-8">
          <div className="sidebar-wrap py-5 w-[20%] bg-white">
            <SideBar
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              productsData={productsData}
              setProductsData={(data) => {
                setProductsData(data);
                setOriginalProducts(data); 
              }}
              page={page}
              setTotalPages={setTotalPages}
            />
          </div>

          <div className="product-list-wrap w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 pl-3 !py-3 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 item-view-actions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                    itemView === "grid" && "active"
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                    itemView === "list" && "active"
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <ImMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="ml-3 text-[15px] font-[400]">
                  Hiện đang có {" "}
                  {productsData?.products?.length !== 0
                    ? productsData?.products?.length
                    : 0}{" "}
                  sản phẩm.
                </span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!normal-case !mr-5 !text-[12px] !font-[600] !bg-white !text-[#000]"
                >
                  {selectedSortValue}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      setProductsData(originalProducts); 
                      setSelectedSortValue("Sắp xếp theo");
                    }}
                  >
                    <em>Không</em>
                  </MenuItem>

                  <MenuItem onClick={() => handleSortBy("name", "asc", productsData, "Tên từ A - Z")}>Tên từ A - Z</MenuItem>
                  <MenuItem onClick={() => handleSortBy("name", "desc", productsData, "Tên từ Z - A")}>Tên từ Z - A</MenuItem>
                  <MenuItem onClick={() => handleSortBy("price", "asc", productsData, "Giá từ thấp đến cao")}>Giá từ thấp đến cao</MenuItem>
                  <MenuItem onClick={() => handleSortBy("price", "desc", productsData, "Giá từ cao xuống thấp")}>Giá từ cao xuống thấp</MenuItem>
                  <MenuItem onClick={() => handleSortBy("createdAt", "asc", productsData, "Sản phẩm cũ nhất")}>Sản phẩm cũ nhất</MenuItem>
                  <MenuItem onClick={() => handleSortBy("createdAt", "desc", productsData, "Sản phẩm mới nhất")}>Sản phẩm mới nhất</MenuItem>
                  <MenuItem onClick={() => handleSortBy("discount", "asc", productsData, "Giảm giá từ thấp đến cao")}>Giảm giá từ thấp đến cao</MenuItem>
                  <MenuItem onClick={() => handleSortBy("discount", "desc", productsData, "Giảm giá từ cao xuống thấp")}>Giảm giá từ cao xuống thấp</MenuItem>
                </Menu>
              </div>
            </div>

            {itemView === "grid" ? (
              <>
                {isLoading ? (
                  <ProductLoadingGrid view={itemView} />
                ) : (
                  <div
                    className={`grid w-full ${
                      itemView === "grid"
                        ? "grid-cols-4 md:grid-cols-4"
                        : "grid-cols-1 md:grid-cols-1 "
                    } gap-4`}
                  >
                    {productsData?.products?.length !== 0 &&
                      productsData?.products?.map((item, index) => {
                        return <ProductItem key={index} item={item} />;
                      })}
                  </div>
                )}
              </>
            ) : (
              <>
                {isLoading ? (
                  <ProductLoadingGrid view={itemView} />
                ) : (
                  productsData?.products?.length !== 0 &&
                  productsData?.products?.map((item, index) => {
                    return <ProductItemListView key={index} item={item} />;
                  })
                )}
              </>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-7">
                <Pagination
                  onChange={(e, value) => setPage(value)}
                  count={totalPages}
                  page={page}
                  showFirstButton
                  showLastButton
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
