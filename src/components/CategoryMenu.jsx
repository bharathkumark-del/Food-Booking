import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'
import { Link } from 'react-router-dom'


const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listUniqeCategory = () => {
        const uniqueCategory = [
            ...new Set(FoodData.map((food) => food.category))
        ];
        setcategories(uniqueCategory)
    


    }
    useEffect(() => {
        listUniqeCategory()
    }, [])

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category)
    return (
        <div className=' flex flex-col items-center justify-center'>
            <div><h3 className=' text-xl  font-semibold'>Find the best food for you</h3></div>

            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
           <Link to={"/"}>
                <button
                    onClick={() => dispatch(setCategory("All"))}
                    className={`px-3 py-2 bg-red-100  font-bold rounded-lg hover:bg-orange-500
                        hover:text-white ${selectedCategory === "All" && "bg-red-500 text-white"}`}>
                    All
                </button>
                </Link>
                {
                    categories.map((category, i) => {
                        return (
                            <Link to={`/${category}`} key={i}> <button
                                onClick={() => dispatch(setCategory(category))}
                                key={i}
                                className={`px-3 py-2 bg-red-100 font-bold rounded-lg hover:bg-orange-500 
                                hover:text-white ${selectedCategory === category && "bg-red-500 text-white"}`}>
                                {category}
                            </button>
                        </Link>
                        )
                           
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu