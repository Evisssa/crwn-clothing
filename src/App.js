import { Routes, Route } from 'react-router-dom';
import path from 'path';

const homePath = path.join(__dirname, 'routes', 'home', 'home');
const navigationPath = path.join(__dirname, 'routes', 'navigation', 'navigation');
const authenticationPath = path.join(__dirname, 'routes', 'authentication', 'authentication');
const shopPath = path.join(__dirname, 'components', 'Shop', 'shop-component');
const checkoutPath = path.join(__dirname, 'routes', 'checkout', 'checkout');

import Home from homePath;
import Navigation from navigationPath;
import Authentication from authenticationPath;
import Shop from shopPath;
import Checkout from checkoutPath;



  const App = ()=> {

  return(
    <Routes>
       <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}>
        </Route>

        <Route path='auth' element={<Authentication/>}/>

        <Route path='checkout' element={<Checkout/>}/>


       </Route>
      
    </Routes>
     
      
  );
}

export default App;
