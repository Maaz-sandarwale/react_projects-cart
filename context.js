import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
import CartItem from './CartItem'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cartdata, setCartdata] = useState(cartItems)
  const [cartQuantity, setCartQuantity] = useState(cartdata.length)
  // const [MyCart, setMycart] = useState(CartItem)
  console.log("card data", CartItem.dataItem)

  const handleCart = (Total) => {
    console.log("Total", Total)
    setCartQuantity(Total)
  }

  return (
    <AppContext.Provider value={{ cartdata, handleCart, cartQuantity }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
