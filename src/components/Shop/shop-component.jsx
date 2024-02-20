import { useContext , Fragment} from 'react';
import { CategoriesContext} from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card-component'
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