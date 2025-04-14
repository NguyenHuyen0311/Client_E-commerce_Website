import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { createContext } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import { IoMdClose } from "react-icons/io";
import ProductDetailsContent from "./components/ProductDetailsContent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Verify from "./pages/Verify";

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./pages/FogotPassword";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyWishlist from "./pages/MyWishlist";
import MyOrders from "./pages/MyOrders";
import MyAddress from "./pages/MyAddress";
import { fetchDataFromApi } from "./utils/api";

const myContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState({
    open: false,
    item: {}
  });
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [catData, setCatData] = useState([]);

  const handleopenProductDetailsModal = (status, item) => {
    setOpenProductDetailsModal({
      open: status,
      item: item
    });
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal({
      open: false,
      item: {}
    });
  };

  const toggleDrawerCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if(token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res) => {
        setUserData(res.data);
      })
    } else {
      setIsLogin(false);
    }
  }, [isLogin])

  useEffect(() => {
      fetchDataFromApi("/api/category").then((res) => {
        if (res?.error === false) {
          setCatData(res?.data);
        }
      });
    }, []);

  const openAlertBox = (status, message) => {
    if(status === "success") {
      toast.success(message);
    }

    if(status === "error") {
      toast.error(message);
    }
  }

  const values = {
    setOpenProductDetailsModal,
    handleopenProductDetailsModal,
    setOpenCartPanel,
    toggleDrawerCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    catData,
    setCatData,
  };

  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route
              path="/product-list"
              exact={true}
              element={<ProductList />}
            />
            <Route
              path="/product-details/:id"
              exact={true}
              element={<ProductDetails />}
            />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/register" exact={true} element={<Register />} />
            <Route path="/cart" exact={true} element={<Cart />} />
            <Route path="/verify" exact={true} element={<Verify />} />
            <Route
              path="/forgot-password"
              exact={true}
              element={<ForgotPassword />}
            />
            <Route path="/checkout" exact={true} element={<Checkout />} />
            <Route path="/my-account" exact={true} element={<MyAccount />} />
            <Route path="/my-wishlist" exact={true} element={<MyWishlist />} />
            <Route path="/my-orders" exact={true} element={<MyOrders />} />
            <Route path="/my-address" exact={true} element={<MyAddress />} />
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal.open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="product-details-modal"
      >
        <DialogContent>
          <div className="relative flex items-center w-full product-details-modal-wrap">
            <Button
              className="!w-[33px] !h-[33px] !bg-[#f1f1f1] !min-w-[33px] !rounded-full !text-[#000] !absolute top-[10px] right-[10px]"
              onClick={handleCloseProductDetailsModal}
            >
              <IoMdClose className="text-[20px]" />
            </Button>

            {openProductDetailsModal?.item?.length !== 0 && (
              <>
                <div className="col-1 w-[40%] mx-3 my-8">
                  <ProductZoom images={openProductDetailsModal?.item?.images} />
                </div>

                <div className="col-2 w-[60%] px-7 py-8 product-content-container">
                  <ProductDetailsContent item={openProductDetailsModal?.item} />
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export { myContext };
