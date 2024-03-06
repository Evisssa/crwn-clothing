import { useContext , useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext} from '../../contexts/categories.context';
import ProductCard from "../../components/product-card/product-card-component";


const Category =() =>{

    console.log('in categoryyyy');
    const {category} = useParams();
   /// const category = useParams().category;
   // const category= category_JSON.category;
    console.log('-0-----------------category ', category);
    const {categoriesMap} = useContext(CategoriesContext);
    console.log('-1--categoriesMap["hats"]', categoriesMap["hats"])
    const  [products, setProducts] = useState(categoriesMap[category])
    
    console.log('-2--categoriesMap', categoriesMap)
    console.log('-3--products', products)


    console.log('-4--categoriesMap["hats"]', categoriesMap["hats"])
    useEffect( ()=>{

        if (categoriesMap && categoriesMap[category]){
            setProducts(categoriesMap[category]);
        }
       
      }, [category, categoriesMap]);

      console.log('-5--products', products)
      console.log('-6--in categoryyyy');
 
      return (
        <>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
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

