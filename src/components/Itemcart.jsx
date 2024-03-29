import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeFromCart,incrementQty,decrementtQty } from '../redux/slices/Cartslices';
import toast from 'react-hot-toast';
const Itemcart = ({ id, name, price, img, qty, }) => {
    
    const dispatch = useDispatch()
    return (
        <div className='flex gap-2 h-[100px] p-2 mb-3 rounded-lg shadow-md'>
            <FaTrash onClick={() => {
                dispatch(removeFromCart({ id, name, price, img, qty }));
                toast(`${name} Removed!`,{
                    icon : "👏",
                })
            }}
                
                className='absolute text-l right-7 cursor-pointer hover:text-orange-500' />
            <img src={img} alt=""
                className='w-[50px] h-[50px]  ' />

            <div className="leading-5">
                <h2 className='font-bold text-gray-800'>{name.slice(0,18)}...</h2>

                <div className="flex justify-between gap-2">

                    <span className='text-orange-500 text-2xl font-bold'>₹{price}</span>
                    <div className="flex gap-2 justify-center items-center mt-2 absolute right-7 ">
                        <span
                        onClick={()=> qty > 1 ?dispatch(decrementtQty({id})):(qty=0)}
                        className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-orange-500 hover:border-none
                         rounded-md  text-3xl transition-all easy-linear cursor-pointer' >-</span>
                        <span className='text-2xl'>{qty}</span>
                        <span 
                        onClick={()=>dispatch(incrementQty({id}))}
                        className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-orange-500 hover:border-none
                         rounded-md text-3xl transition-all easy-linear cursor-pointer' >+</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Itemcart