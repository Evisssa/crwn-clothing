import { createContext,useState,useEffect } from 'react';
import {addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products :[],
});

export const ProductsProvider = ({ children }) => {

    const [products,setProducts] = useState([]);
   

    useEffect(()=>{


        const getcategoryMap = async() => {
            const categoryMap = getCategoriesAndDocuments('categories');
            console.log('cat',categoryMap);

        } 
        getcategoryMap();

       
   
},[])

/*
    useEffect(()=>{

            addCollectionAndDocuments('categories',SHOP_DATA);
       
    },[])
*/
   // const [currentProd,setCurrentProd]= useState(null);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>
        {children}
        </ProductsContext.Provider>
    )
    
}
