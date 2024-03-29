import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <nav>
        <Navbar />
        <CategoryMenu />
      </nav>

      <main>
        <FoodItems />
        <Cart />
      </main>
      <footer>
        <Footer />
      </footer>

    </>

  )
}

export default Home