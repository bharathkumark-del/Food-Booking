import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectRout = ({element}) => {
    const cartItem = useSelector((state)=> state.cart.cart)
  return (
    cartItem.length>0? element : <Navigate to={"/"}/>
  )
}

export default ProtectRout