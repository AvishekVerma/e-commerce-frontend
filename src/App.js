import logo from './logo.svg';
import './App.css';
import HomePageNew from './customer/pages/HomePage/HomePageNew';
import Footer from './customer/components/Footer/Footer';
import NavigationNew from './customer/components/Navigation/NavigationNew';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import ProductReviewCard from './customer/components/ProductDetails/ProductRevieCard';
import ProductCard from './customer/components/Product/ProductCard';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import DeliveryAddressForm from './customer/components/Checkout/DeliveryAddressForm';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Routes, Route } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
      </Routes> */}
      <NavigationNew/>
      <div>
        {/* <HomePageNew/> */}
        <Product/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
