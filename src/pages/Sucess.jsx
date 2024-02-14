import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const Sucess = () => {
  const navigate = useNavigate()

  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }, [])
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white-500'>
      {
       loading ? (<PropagateLoader color="orange" /> ):
           (<div>
        <h2 className=' text-2xl font-semibolb mb-4 text-center'> Order Successfull!!</h2>
        <p>Your order is successfully placed</p>
      </div>)
 
      }
   <button 
                        onClick={() => navigate("/")}
   
   > Go to Home</button>
    </div>
  )
}

export default Sucess