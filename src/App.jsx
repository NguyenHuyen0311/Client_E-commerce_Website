import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { createContext } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Verify from "./pages/Verify";

import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/FogotPassword";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyWishlist from "./pages/MyWishlist";
import MyOrders from "./pages/MyOrders";
import MyAddress from "./pages/MyAddress";
import { fetchDataFromApi, postData } from "./utils/api";

const myContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState({
    open: false,
    item: {},
  });
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openAddressPanel, setOpenAddressPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [catData, setCatData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [addressList, setAddressList] = useState([]);

  const openAlertBox = (status, message) => {
    if (status === "success") {
      toast.success(message);
    }

    if (status === "error") {
      toast.error(message);
    }
  };

  const handleopenProductDetailsModal = (status, item) => {
    setOpenProductDetailsModal({
      open: status,
      item: item,
    });
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal({
      open: false,
      item: {},
    });
  };

  const toggleDrawerCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const toggleDrawerAddressPanel = (newOpen) => () => {
    setOpenAddressPanel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      getUserDetails();
      getCartItems();
    } else {
      setIsLogin(false);
      setCartData([]);
    }
  }, [isLogin]);

  const getUserDetails = () => {
    fetchDataFromApi(`/api/user/user-details`).then((res) => {
      setUserData(res.data);

      if (res?.data?.error === true) {
        if (res?.data?.message === "Bạn chưa đăng nhập!") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");

          openAlertBox(
            "error",
            "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!"
          );
          window.location.href = "/login";

          setIsLogin(false);
        }
      }
    });
  };

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      if (res?.error === false) {
        setCatData(res?.data);
      }
    });
  }, []);

  const addToCart = (product, userId, quantity) => {
    console.log(product);

    if (userId === undefined) {
      openAlertBox("error", "Bạn chưa đăng nhập!");
      return false;
    }

    const data = {
      productTitle: product?.name,
      image: product?.image,
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      discount: product?.discount,
      flavor: product?.flavor,
      weight: product?.weight,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      brand: product?.brand,
    };

    postData("/api/cart/add", data).then((res) => {
      if (res?.error === false) {
        openAlertBox("success", res?.message);

        getCartItems();
        return true;
      } else {
        openAlertBox("error", res?.message);
        return false;
      }
    });
  };

  const getCartItems = () => {
    fetchDataFromApi(`/api/cart/get`).then((res) => {
      if (res?.error === false) {
        setCartData(res?.data);
      }
    });
  };

  useEffect(() => {
    getAddressLists();
  }, []);

  const getAddressLists = () => {
    fetchDataFromApi(`/api/address/get`, { withCredentials: true }).then(
      (res) => {
        if (res?.success) {
          setAddressList(res.address || []);
        }
      }
    );
  };

  const values = {
    openProductDetailsModal,
    setOpenProductDetailsModal,
    handleopenProductDetailsModal,
    handleCloseProductDetailsModal,
    setOpenCartPanel,
    toggleDrawerCartPanel,
    openCartPanel,
    setOpenAddressPanel,
    openAddressPanel,
    toggleDrawerAddressPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    catData,
    setCatData,
    addToCart,
    cartData,
    getCartItems,
    getUserDetails,
    getAddressLists,
    addressList,
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
    </>
  );
}

export default App;

export { myContext };
