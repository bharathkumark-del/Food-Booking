import React from 'react'
import logo from "../assets/pizza-logo.png"


function Footer() {

  return (
    <div className="mt-[20px]">
      <center><div className="logo  bottom-[4px] w-[200px]">
        <img src={logo} alt="" />
      </div>

      <div className="feedback mt-[20px]">
        <h1 className=' text-2xl font-bold text-orange-600 '>Thanks for  visiting!</h1>

      </div></center>
      

    </div>
  )
}

export default Footer