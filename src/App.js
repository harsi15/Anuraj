import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import AllSpices from './pages/AllSpices';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Recipes from './pages/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerHelp from './pages/CustomerHelp';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/AllSpices' element={<AllSpices/>}></Route>
          <Route path='/About-us' element={<AboutUs/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/LoginSignUp' element={<LoginSignUp/>}></Route>
          <Route path='/Recipes' element={<Recipes/>}></Route>
          <Route path='/customer-help' element={<CustomerHelp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
