import React, { useEffect, useState } from "react";
import AccountSidebar from "../../components/AccountSideBar";
import { FaAngleDown } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  Button,
} from "@mui/material";
import Badge from "../../components/Badge";
import { fetchDataFromApi } from "../../utils/api";

function MyOrders() {
  const [expandedRows, setExpandedRows] = useState([]);
  const [orders, setOrders] = useState([]);

  const toggleExpand = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    fetchDataFromApi("/api/order/order-list").then((res) => {
      if (res?.error === false) {
        setOrders(res?.data);
      }
    });
  }, []);

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col-1 w-[25%]">
          <AccountSidebar />
        </div>

        <div className="col-2 w-[75%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="text-[15px] font-[600]">Thông tin đơn đặt hàng</h2>
            <p className="text-[13px] font-[400] mt-1 border-b pb-3">
              Hiện đang có
              <span className="text-[#ff5252] font-bold">
                {" "}
                {orders?.length}
              </span>{" "}
              đơn hàng
            </p>

            <TableContainer
              component={Paper}
              className="mt-4 shadow-md"
              sx={{ maxHeight: 500, overflowY: "auto" }}
            >
              <Table>
                <TableHead>
                  <TableRow className="bg-gray-100">
                    <TableCell></TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Mã đơn hàng
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Mã thanh toán
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Họ và tên
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Số điện thoại
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Địa chỉ nhận hàng
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Tổng tiền
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Email
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Mã người dùng
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Trạng thái đơn hàng
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center !text-[12px] uppercase !font-[700]">
                      Ngày đặt hàng
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {orders?.length !== 0 &&
                    orders?.map((order, index) => {
                      return (
                        <>
                          <React.Fragment key={order._id}>
                            <TableRow>
                              <TableCell className="border text-center">
                                <Button className="!bg-[#f1f1f1] !w-[30px] !h-[30px] transition-all !min-w-[30px] !p-2 !rounded-full">
                                  <FaAngleDown
                                    className={`cursor-pointer text-black transition-transform ${
                                      expandedRows.includes(index)
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                    onClick={() => toggleExpand(index)}
                                  />
                                </Button>
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?._id}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.paymentId
                                  ? order?.paymentId
                                  : "Thanh toán khi nhận hàng"}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.delivery_address?.name || order?.userId?.name}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.delivery_address?.mobile || order?.userId?.mobile}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.delivery_address?.address_details}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.totalAmount?.toLocaleString("vi-VN")}đ
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.userId?.email}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {order?.userId?._id}
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                <Badge status={order?.order_status} />
                              </TableCell>
                              <TableCell className="border whitespace-nowrap !text-center">
                                {new Date(order?.createdAt).toLocaleDateString(
                                  "vi-VN"
                                )}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell colSpan={8} className="p-0">
                                <Collapse in={expandedRows.includes(index)}>
                                  <Table className="w-full">
                                    <TableHead className="bg-gray-50">
                                      <TableRow>
                                        <TableCell className="border !text-center text-[12px] uppercase font-[700]">
                                          Mã sản phẩm
                                        </TableCell>
                                        <TableCell className="border !text-center text-[12px] uppercase font-[700]">
                                          Ảnh
                                        </TableCell>
                                        <TableCell className="border !text-center text-[12px] uppercase font-[700]">
                                          Tên sản phẩm
                                        </TableCell>
                                        <TableCell className="border !text-center text-[12px] uppercase font-[700]">
                                          Số lượng
                                        </TableCell>
                                        <TableCell className="border !text-center text-[12px] uppercase font-[700]">
                                          Đơn giá
                                        </TableCell>
                                        <TableCell className="border !text-center text-[12px] uppercase font-[700]">
                                          Tạm tính
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {order?.products?.map((item, index) => {
                                        return (
                                          <TableRow key={index}>
                                            <TableCell className="border !text-center">
                                              {item?.productId}
                                            </TableCell>
                                            <TableCell className="border text-center">
                                              <div className="flex justify-center">
                                                <img
                                                  src={item?.image}
                                                  alt={item?.productTitle}
                                                  className="w-10 h-10 rounded"
                                                />
                                              </div>
                                            </TableCell>
                                            <TableCell className="border !text-center">
                                              {item?.productTitle}
                                            </TableCell>
                                            <TableCell className="border !text-center">
                                              {item?.quantity}
                                            </TableCell>
                                            <TableCell className="border !text-center">
                                              {item?.price?.toLocaleString(
                                                "vi-VN"
                                              )}
                                              đ
                                            </TableCell>
                                            <TableCell className="border !text-center">
                                              {item?.subTotal?.toLocaleString(
                                                "vi-VN"
                                              )}
                                              đ
                                            </TableCell>
                                          </TableRow>
                                        );
                                      })}
                                    </TableBody>
                                  </Table>
                                </Collapse>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        </>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyOrders;
