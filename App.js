import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { cartdata, handleCart } = useGlobalContext();
  console.log("In APp", handleCart, cartdata)
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar handleCart={handleCart}/>
      <CartContainer />
    </main>
  )
}

export default App
