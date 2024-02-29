import logo from './logo.svg';
import './App.css';
// import Navigation from './customer/components/Navigation/Navigation';
import HomePageNew from './customer/pages/HomePage/HomePageNew';
import Footer from './customer/components/Footer/Footer';
import NavigationNew from './customer/components/Navigation/NavigationNew';
function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <NavigationNew/>
      <div>
        <HomePageNew/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
