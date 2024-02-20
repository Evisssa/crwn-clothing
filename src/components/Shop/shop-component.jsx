import { useContext, Fragment } from 'react';
import path from 'path';

// Assuming CategoriesContext and ProductCard are in the same directory as the file importing them
const categoriesContextPath = path.join(__dirname, '../../contexts/categories.context');
const productCardPath = path.join(__dirname, '../product-card/product-card-component');

import { CategoriesContext } from categoriesContextPath;
import ProductCard from productCardPath;

import './shop.scss';


const Shop = () =>{
    const {categoriesMap} = useContext(CategoriesContext);


   
    console.log('-categories Map-',categoriesMap);

    return(
    <Fragment>
        
             {Object.entries(categoriesMap).map(([title, products]) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className='products-container'>
                        {products.slice(0,4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
      
    </Fragment>       
 )}




 export default Shop;


 //  /* products.map((product)=>(
 //</div>   <ProductCard key={product.id} product={product}/>                  
 //   ))  
  //  */