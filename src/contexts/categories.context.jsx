import { createContext,useState,useEffect } from 'react';
import {addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoryMap :{},
});

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap,setCategoriesMap] = useState({});
 
    useEffect(()=>{
    

        const getCategoryMap = async() => {

            try{
                const categoryMap = await getCategoriesAndDocuments('categories');
                setCategoriesMap(categoryMap);

            }
            catch (error) {
                console.error('Error fetching categories map:', error);
            }
            
        } 
        getCategoryMap();
    
    
    },[]);

/*
    useEffect(()=>{

            addCollectionAndDocuments('categories',SHOP_DATA);
       
    },[])
*/
   // const [currentProd,setCurrentProd]= useState(null);
    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}>
        {children}
        </CategoriesContext.Provider>
    )
    
}
