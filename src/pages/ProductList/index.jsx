import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';

function ProductList() {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="pt-5 bg-white">
      <div className="bg-white p-2">
        <div className="container flex gap-8">
          <div className="sidebar-wrap py-5 w-[20%] h-full bg-white">
            <SideBar />
          </div>

          <div className="product-list-wrap w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 pl-3 !py-3 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 item-view-actions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === "grid" && "active"}`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === "list" && "active"}`}
                  onClick={() => setItemView("list")}
                >
                  <ImMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="ml-3 text-[15px] font-[400]">
                  Hiện đang có 23 sản phẩm.
                </span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end">
                <span className="ml-3 mr-3 text-[15px] font-[400]">
                  Sắp xếp theo
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!normal-case !text-[12px] !font-[600] !bg-white !text-[#000]"
                >
                  Sản phẩm mới nhất
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
                  <MenuItem onClick={handleClose}>Giá thấp đến cao</MenuItem>
                  <MenuItem onClick={handleClose}>Giá cao đến thấp</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Giảm giá thấp đến cao
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Giảm giá cao đến thấp
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Tên từ A - Z</MenuItem>
                  <MenuItem onClick={handleClose}>Tên từ Z - A</MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1 "
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>

            <div className="flex items-center justify-center mt-7">
                <Pagination count={10} showFirstButton showLastButton />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
