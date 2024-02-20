import { createContext, useState, useEffect } from 'react';
import path from 'path';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
import SHOP_DATA from '../shop-data.js';

// Assuming the firebase.utils.js file is in the same directory as the file importing it
const firebaseUtilsPath = path.join(__dirname, '../utils/firebase/firebase.utils.js');
import { addCollectionAndDocuments, getCategoriesAndDocuments } from firebaseUtilsPath;

// Assuming SHOP_DATA is in the same directory as the file importing it
const shopDataPath = path.join(__dirname, '../shop-data.js');
import SHOP_DATA from shopDataPath;


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
