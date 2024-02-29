import logo from './logo.svg';
import './App.css';
// import Navigation from './customer/components/Navigation/Navigation';
import HomePageNew from './customer/pages/HomePage/HomePageNew';
import Footer from './customer/components/Footer/Footer';
import NavigationNew from './customer/components/Navigation/NavigationNew';
import Product from './customer/components/Product/Product';
import ProductNew from './customer/components/Product/ProductNew';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import ProductReviewCard from './customer/components/ProductDetails/ProductRevieCard';
import ProductCard from './customer/components/Product/ProductCard';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import DeliveryAddressForm from './customer/components/Checkout/DeliveryAddressForm';
function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <NavigationNew/>
      <div>
        {/* <HomePageNew/> */}
        {/* <Product/> */}
        {/* <ProductNew /> */}
        {/* <ProductCard  /> */}
        {/* <ProductDetails/> */}
        {/* <ProductReviewCard/> */}
        {/* <Cart/> */}
        <Checkout/>
        {/* <DeliveryAddressForm/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
