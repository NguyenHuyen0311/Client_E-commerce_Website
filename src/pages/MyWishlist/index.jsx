import React, { useContext } from "react";
import MyWishlistItem from "./wishlistItem";
import AccountSidebar from "../../components/AccountSideBar";
import { myContext } from "../../App";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function MyWishlist() {
  const context = useContext(myContext);
  
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col-1 w-[25%]">
          <AccountSidebar />
        </div>

        <div className="col-2 w-[75%]">
        <div className="shadow-md rounded-md bg-white">
            <div className="view-cart-title w-full px-3 py-5 border-b">
              <h2 className="text-[15px] font-[600]">Danh sách yêu thích</h2>
              <p className="text-[13px] font-[400] mt-1">
                Hiện đang có
                <span className="text-[#ff5252] font-bold"> {context?.myWishlistData?.length}</span> sản phẩm
                trong danh sách yêu thích của bạn
              </p>
            </div>
            {
              context?.myWishlistData?.length !== 0 ? context?.myWishlistData?.map((item, index) => {
                return (
                  <MyWishlistItem key={index} item={item} />
                )
              })

              : 
              <div className="flex items-center justify-center flex-col py-12 px-3">
                <img src="./wish-list-empty.png" className="w-[120px] h-[120px]" />
                <h3 className="text-[16px] font-[500] mt-3 mb-3">Danh sách yêu thích của bạn hiện đang trống</h3>
                <Link to="/">
                  <Button className="btn-org">Tiếp tục mua sắm</Button>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWishlist;
