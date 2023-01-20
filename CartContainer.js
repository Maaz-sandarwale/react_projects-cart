import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cartdata } = useGlobalContext()

  return (
    <section className='MyCart'>
      <h3 style={{ marginBottom: "3rem" }}>Your Bag</h3>
      <CartItem />
    </section>
  )
}

export default CartContainer
