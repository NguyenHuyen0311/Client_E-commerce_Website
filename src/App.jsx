import React, { useState } from "react";
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

const myContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleDrawerCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox = (status, message) => {
    if(status === "success") {
      toast.success(message);
    }

    if(status === "error") {
      toast.success(message);
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleDrawerCartPanel,
    openCartPanel,
    openAlertBox,
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
            <Route path="/forgot-password" exact={true} element={<ForgotPassword />} />
            <Route path="/checkout" exact={true} element={<Checkout />} />
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal}
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

            <div className="col-1 w-[40%] px-3 py-8">
              <ProductZoom />
            </div>

            <div className="col-2 w-[60%] px-7 py-8 product-content-container">
              <ProductDetailsContent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export { myContext };
