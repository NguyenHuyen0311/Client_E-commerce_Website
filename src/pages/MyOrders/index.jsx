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
                      <div className="bg-[#f1f1f1] p-2 rounded-full">
                        <FaAngleDown
                            className={`cursor-pointer transition-transform ${
                            expanded ? "rotate-180" : ""
                            }`}
                            onClick={toggleExpand}
                        />
                      </div>
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
                                Tổng tiền
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
                                    src="data:image/jpeg;base64,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"
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
                                    src="data:image/jpeg;base64,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"
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
                            <TableRow className="bg-gray-50 font-bold">
                              <TableCell
                                colSpan={5}
                                className="border text-right pr-5"
                              >
                                Tổng số tiền:
                              </TableCell>
                              <TableCell className="border !text-center !text-[#ff5252] !font-[700]">
                                16,000,000đ
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
