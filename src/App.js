import{Routes,Route} from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import CategoriesPreview from './routes/categories-preview/categories-preview'
import Category from './routes/category/category';
import Checkout from './routes/checkout/checkout';



  const App = ()=> {

  return(
    <Routes>
       <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<CategoriesPreview />}/>
        <Route path='shop/:category' element={<Category />}/>

        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>

       </Route>
      
    </Routes>
     
      
  );
}

export default App;
