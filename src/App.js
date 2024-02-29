import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePageNew from './customer/pages/HomePage/HomePageNew';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePageNew/>
      </div>
    </div>
  );
}

export default App;
