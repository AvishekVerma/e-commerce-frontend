import './App.css';
import Footer from './customer/components/Footer/Footer';
import NavigationNew from './customer/components/Navigation/NavigationNew';
import Product from './customer/components/Product/Product';
import { Routes, Route } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
      </Routes> */}
      <NavigationNew/>
      <div>
        {/* <Product/> */}
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
