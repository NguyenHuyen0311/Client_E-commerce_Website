import React, { useContext } from 'react'
import banhbonglandaunanh1 from "../../assets/image/banhbonglandaunanh.png";
import banhbonglandaunanh2 from "../../assets/image/banhbonglandaunanh2.png";
import "./productItem.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { myContext } from '../../App';

function ProductItem() {
  const context = useContext(myContext);

  return (
    <div className='product-item rounded-md overflow-hidden border-1 border-solid border-[#ddd] transition-all shadow-lg'>
        <div className='group img-wrapper w-[100%] rounded-t-md overflow-hidden relative'>
            <Link to="/">
              <div className='product-img h-[220px] overflow-hidden'>
                <img src={banhbonglandaunanh1} className='w-full h-full object-cover' />
                <img src={banhbonglandaunanh2} className='w-full h-full object-cover transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' />
              </div>
            </Link>
            <div className='discount flex items-center absolute top-2 left-2 bg-[#ff5252] text-white p-1 rounded-[10px] text-[12px] font-[400]'>
              -33%
            </div>
            <div className='actions absolute top-[-200px] right-[15px] flex items-center gap-2 flex-col w-[30px] transition-all duration-500 group-hover:top-[10px] opacity-0 group-hover:opacity-100'>
              <Button onClick={() => context.setOpenProductDetailsModal(true)} className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all flex items-center justify-center'>
                <MdZoomOutMap className='text-[18px]' />
              </Button>
              <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all flex items-center justify-center'>
                <FaRegHeart className='text-[18px]' />
              </Button>
            </div>
        </div>

        <div className='product-info p-3 py-5'>
          <h6 className='text-[14px] text-[#3b3a3a] product-brand'>
            <Link to="/" className='link transition-all'>Yipin</Link>
          </h6>
          <h3 className='text-[16px] product-title mt-2 font-[500] mb-2 text-[rgb(0, 0, 0, 0.9)]'>
            <Link to="/" className='link transition-all'>Bánh bông lan hấp đậu nành</Link>
          </h3>
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          <div className='flex items-center mt-1 gap-4'>
            <span className='old-price text-[14px] line-through text-gray-500'>30.000đ</span>
            <span className='new-price text-[#ff5252] text-[15px]  font-[600]'>20.000đ</span>
          </div>
        </div>
    </div>
  )
}

export default ProductItem;