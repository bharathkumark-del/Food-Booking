import React, { useState } from 'react'
import Itemcart from './Itemcart'
import { useSelector } from 'react-redux'
import { ImCross } from "react-icons/im";
import { HiShoppingCart } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const [active, setactive] = useState(false)

    const cartItems = useSelector((state) => state.cart.cart)
    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)
    const navigate = useNavigate()

    return (
        <>
            <div className={`fixed right-0  top-0 w-full lg:w-[20vw] h-full   bg-white pl-4 ${active ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className="flex justify-between  my-3">
                    <span className='text-xl font-bold text-gray-700 '>My Order</span>
                    <ImCross className='border-2 border-gray-500 text-gray-600 font-bold pl-1 pr-1 text-xl rounded-md
                      hover:text-orange-400 hover:border-orange-400 cursor-pointer'  onClick={() => setactive(!active)} />

                </div>
                {
                    cartItems.length > 0 ? cartItems.map((food) => {
                        return (
                            <Itemcart
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                img={food.img}
                                price={food.price}
                                qty={food.qty}
                            />

                        )

                    }) : <h2 className='text-center text-xl font-bold text-gray-600'> Your cart is empty</h2>

                }
                <div className="  absolute bottom-0 justify-cen">
                    <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount :{totalPrice}</h3>
                    <hr className='w-[90vw] lg:w-[18vw] ' />
                    <button
                        onClick={() => navigate("/success")}
                        className='bg-orange-500 font-bold px-2 mb-5 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]'>
                        Checkout</button>
                </div>
            </div>
            <HiShoppingCart
                onClick={() => setactive(!active)}
                className={`rounded-full bg-white text-orange-500 shadow-md text-5xl p-2 fixed bottom-4 
                right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />

        </>
    )


}

export default Cart