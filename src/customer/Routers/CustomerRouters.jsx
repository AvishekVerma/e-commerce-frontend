import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import Order from '../components/Order/Order'
import OrderDetails from '../components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path='https://github.com/AvishekVerma/e-commerce-frontend' element={<HomePage />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:labelOne/:lableTwo/:lableThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters