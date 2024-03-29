import React from 'react'
import star from '../assets/star.png';
import { useDispatch } from 'react-redux';
import { addToCart} from '../redux/slices/Cartslices';

const Foodcart = ({id, name, price,desc,img,rating,handeToast}) => {
    const dispatch=useDispatch();
    return (
        <div className='font-bold w-[250px] ml-3  bg-white p-5 flex flex-col rounded-lg '  >
            <img src={img}
                alt=""
                className='cursor-grab w-auto h-[130px] hover:scale-110 transition-all duration-500 eay-in-out ' />
            <div className='text-m mt-2 flex justify-between'>
                <h2>{name.slice(0,17)}</h2>
                <span className='text-blue-900'>₹{price} </span>
               
            </div>
            <p className='text-gray-600 mt-1'>{desc.slice(0,40)}... </p>
        <div className='flex gap-10 mt-2 flex-row'  >
            <span className=' flex flex-row   gap-1 '>
                <img src={star} className='w' alt="" /> <p className='text-2xl'>{rating}</p>
            </span>
            <button onClick={()=>{
                dispatch(addToCart({id,name,price,rating,img,qty:1}))
                handeToast(name);
            }} className='p-2 text-sm text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-lg'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Foodcart