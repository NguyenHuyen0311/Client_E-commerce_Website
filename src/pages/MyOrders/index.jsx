import React, { useState } from "react";
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

function MyOrders() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
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
              <span className="text-[#ff5252] font-bold"> 2</span> đơn hàng
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
                  <TableRow>
                    <TableCell className="border text-center">
                    <Button className="!bg-[#f1f1f1] !w-[30px] !h-[30px] transition-all !min-w-[30px] !p-2 !rounded-full">
                    <FaAngleDown
                      className={`cursor-pointer text-black transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                      onClick={toggleExpand}
                    />
                  </Button>
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      #12345
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      PAY-67890
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      Nguyễn Văn A
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      0123456789
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      123 Đường ABC
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      1,500,000đ
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      a@gmail.com
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      U-001
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      <Badge status="Đã giao hàng" />
                    </TableCell>
                    <TableCell className="border whitespace-nowrap !text-center">
                      27-3-2025
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={8} className="p-0">
                      <Collapse in={expanded}>
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
                            <TableRow>
                              <TableCell className="border !text-center">
                                P001
                              </TableCell>
                              <TableCell className="border text-center">
                                <div className="flex justify-center">
                                  <img
                                    src=""
                                    alt="Xiên bẩn"
                                    className="w-10 h-10 rounded"
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="border !text-center">
                                Xiên bẩn
                              </TableCell>
                              <TableCell className="border !text-center">
                                1
                              </TableCell>
                              <TableCell className="border !text-center">
                                15,000,000đ
                              </TableCell>
                              <TableCell className="border !text-center">
                                15,000,000đ
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className="border !text-center">
                                P002
                              </TableCell>
                              <TableCell className="border text-center">
                                <div className="flex justify-center">
                                  <img
                                    src=""
                                    alt="Nem rán"
                                    className="w-10 h-10 rounded"
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="border !text-center">
                                Nem rán
                              </TableCell>
                              <TableCell className="border !text-center">
                                2
                              </TableCell>
                              <TableCell className="border !text-center">
                                500,000đ
                              </TableCell>
                              <TableCell className="border !text-center">
                                1,000,000đ
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
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
