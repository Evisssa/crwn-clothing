import { useContext , useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext} from '../../contexts/categories.context';
import ProductCard from "../../components/product-card/product-card-component";


const Category =() =>{

    console.log('in categoryyyy');
    const category = useParams();
    console.log('------------------category ', category.category);
    const categoriesMap = useContext(CategoriesContext);
    const  [products, setProducts] = useState(categoriesMap[category.category])


    useEffect( ()=>{
        setProducts(categoriesMap[category]);
      }, [category, categoriesMap]);


      console.log('in categoryyyy');
 
      return (
        <>
        <h2 className='category-title'>{category.category.toUpperCase()}</h2>
            {products && products.map((product)=>
                        (
                            <ProductCard  key={product.id} product={product}/>
                        )
                    )
               }
        </>
      );
}

export default Category;

