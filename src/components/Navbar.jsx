import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()

    return (
        <nav className='flex flex-col lg:flex-row mb-10 justify-between mx-6 py-3'>
            <div className="">

                <h3 className=' text-xl font-bold text-orange-500'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className=' text-2xl font-bold text-red-800 '>Pizza Planet </h1>
            </div>


            <div className="">
                <input type="search"
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    className='p-3 border border-red-900 text-sm rounded-lg outline-none  w-full lg:w-[25vw]'
                    name='search'
                    id=''
                    placeholder='Search...'
                    autoComplete='off' />
            </div>
        </nav>
    )
}

export default Navbar