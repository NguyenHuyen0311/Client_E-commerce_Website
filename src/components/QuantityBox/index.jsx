import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function QuantityBox(props) {
  const [quantityValue, setQuantityValue] = useState(1);

  const plusQuantity = () => {
    setQuantityValue(quantityValue + 1);
    props.handleSelectedQty(quantityValue + 1);
  };

  const minusQuantity = () => {
    if (quantityValue === 1) {
      setQuantityValue(1);
      props.handleSelectedQty(1);
    } else {
      setQuantityValue(quantityValue - 1);
      props.handleSelectedQty(quantityValue - 1);
    }
  };

  return (
    <div className="quantity-box flex items-center gap-4 relative">
      <input
        type="number"
        min="1"
        value={quantityValue}
        className="w-16 pl-4 text-[16px] text-gray-600 border p-1 rounded outline-none"
      />

      <div className="flex items-center flex-col justify-between h-[34px] absolute top-0 right-0 border-l-1">
        <Button
          className="!min-w-[30px] !w-[30px] !h-[17px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]"
          onClick={plusQuantity}
        >
          <FaAngleUp className="text-[12px] opacity-65" />
        </Button>
        <Button
          className="!min-w-[30px] !w-[30px] !h-[17px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]"
          onClick={minusQuantity}
        >
          <FaAngleDown className="text-[12px] opacity-65" />
        </Button>
      </div>
    </div>
  );
}

export default QuantityBox;
