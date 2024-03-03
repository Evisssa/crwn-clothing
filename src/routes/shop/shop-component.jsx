import {Route, Routes } from 'react-router-dom';
import CategoriesPreview  from "../categories-preview/categories-preview";
import Category from "../category/category";

import './shop.scss';

const Shop = () =>{

    return (
      <Routes>
        <Route path='/' element= {<CategoriesPreview />}/>
        <Route path=':prodTitle' element={<Category />}/>
      </Routes>
    )
   

}




 export default Shop;


 //  /* products.map((product)=>(
 //</div>   <ProductCard key={product.id} product={product}/>                  
 //   ))  
  //  */