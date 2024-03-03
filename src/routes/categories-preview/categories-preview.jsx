import { useContext , Fragment} from 'react';
import { CategoriesContext} from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card-component';


const CategoriesPreview=() =>{

    const {categoriesMap} = useContext(CategoriesContext);

    console.log('-categories Map-',categoriesMap);

    return(
    <Fragment>
        
             {Object.entries(categoriesMap).map(([title, products]) => (
                <Fragment key={title}>
                    <h2>{title.toUpperCase()}</h2>
                    <div className='products-container'>
                        {products.slice(0,4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
      
    </Fragment>       
 )

} 

export default CategoriesPreview;