import React, { useState } from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar';
const CartItem = () => {
  const { cartdata, handleCart } = useGlobalContext();
  const [dataItem, setDataItem] = useState(cartdata)
  const [Total, setTotal] = useState(dataItem.reduce((a, v) => a = a + v.price, 0))


  const addItem = (id) => {
    setDataItem(dataItem.map((item) => {
      if (item.id == id) {
        const temp = Total + item.price;
        setTotal((parseFloat(temp).toFixed(2)) * 1)

        handleCart((prev) => prev + 1)
        console.log("Remove Total", typeof (Total), Total, typeof (item.price), item.price, typeof (Total + item.price), Total + item.price)
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    }))

  }

  const removeItem = (id) => {
    setDataItem(dataItem.map((item) => {
      if (item.id === id) {
        const temp = Total - item.price;
        setTotal((parseFloat(temp).toFixed(2)) * 1)

        handleCart((prev) => prev - 1)
        console.log("Remove Total", Total, item.price, Total - item.price)
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    }).filter((item) => {
      return item.quantity !== 0
    }))
  }

  const removeBtn = (id) => {
    const newData = dataItem.filter((item) => {
      if (item.id == id) {
        const temp = Total - item.price;
        handleCart((prev) => prev - 1)
        setTotal((parseFloat(temp).toFixed(2)) * 1)
      }

      return item.id !== id
    })

    if (newData.length == 0) {
      setTotal(0)
      handleCart(0)
    }
    setDataItem(newData)
  }

  const clearAll = () => {
    setDataItem([])
    setTotal(0)
    handleCart(0)
  }

  return (

    <article>

      {dataItem.length > 0 ?
        dataItem.map(item => {

          return (
            <>
              < ul >
                <li className='mylist'>
                  <img src={item.img} className='myimg'></img>
                  <div className='content'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='add' id="quantity" onClick={() => addItem(item.id)}>
                      <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                    <p >{item.title}</p>
                    <span className='myamount'>{item.quantity}</span>
                    <p style={{ color: "#617d98" }}>${item.price}</p>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='remove' onClick={() => removeItem(item.id)}>
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                    <button className='removebtn' onClick={() => removeBtn(item.id)}>remove</button>
                  </div>
                </li>
              </ul>
              <br></br>
            </>
          )
        }) : <p>Bag is empty</p>}
      <hr style={{ color: 'black' }}></hr>
      <div>
        <p style={{ float: "left" }}>Total</p>
        <p style={{ float: "right" }}>${Total}</p>
      </div>
      <button className='clearbag' onClick={clearAll}>Clear Bag</button>
    </article >
  )

}

export default CartItem
