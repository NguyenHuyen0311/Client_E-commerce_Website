import React from "react";
import MyWishlistItem from "./wishlistItem";
import MyAccountSidebar from "../../components/AccountSideBar";

function MyWishlist() {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col-1 w-[25%]">
          <MyAccountSidebar />
        </div>

        <div className="col-2 w-[75%]">
        <div className="shadow-md rounded-md bg-white">
            <div className="view-cart-title w-full px-3 py-5 border-b">
              <h2 className="text-[15px] font-[600]">Danh sách yêu thích</h2>
              <p className="text-[13px] font-[400] mt-1">
                Hiện đang có
                <span className="text-[#ff5252] font-bold"> 18</span> sản phẩm
                trong danh sách yêu thích của bạn
              </p>
            </div>
            <MyWishlistItem />
            <MyWishlistItem />
            <MyWishlistItem />
            <MyWishlistItem />
            <MyWishlistItem />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWishlist;
