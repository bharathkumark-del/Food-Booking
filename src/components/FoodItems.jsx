import React from 'react'
import Foodcart from './Foodcart'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const FoodItems = () => {
  const caterory = useSelector((state)=> state.category.category)
  const search = useSelector((state)=> state.search.search)
  const handeToast = (name)=> toast.success(`${name} added to cart`);

  
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex m-1 my-10 flex-wrap gap-10 justify-center lg:justify-start '>
        {
          FoodData.filter((food)=>{
            if(caterory === "All"){
              return food.name.toLowerCase().includes(search.toLowerCase());
            }else {
            return caterory === food.category &&
            food.name.toLowerCase().includes(search.toLowerCase())

            }

          }).map((food)=>{
            return(
            <Foodcart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            category={food.category}
            rating={food.rating}
            img={food.img}
            handeToast={handeToast}
        
          />)
            
          })
        }
      </div>
    </>
  )
}

export default FoodItems