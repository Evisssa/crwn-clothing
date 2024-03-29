import {initializeApp} from 'firebase/app';
import { 
        getAuth,
        signInWithRedirect, 
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
     } from 'firebase/auth';
import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        writeBatch,
        query,
        getDocs,
        } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCeCUrRf9lf9irvqJVuWmnMHVtFIWemozM",
    authDomain: "crwn-clothing-db-81acc.firebaseapp.com",
    projectId: "crwn-clothing-db-81acc",
    storageBucket: "crwn-clothing-db-81acc.appspot.com",
    messagingSenderId: "1029933655345",
    appId: "1:1029933655345:web:4066967dd1c0e05528fc10"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  
  export const auth = getAuth();
  googleProvider.setCustomParameters({
    prompt:'select_account'
  })


  export const signInWithGooglePopup =() => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth,googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef,object);
      
    });

    await batch.commit();
    console.log('Done');

  }


  export const getCategoriesAndDocuments = async()=>{

    //Get a reference to the 'categories' collection in Firestore
    const collectionRef = collection(db,'categories');

    //Create a query for the 'categories' collection
    const q = query(collectionRef);
   

    //Execute the query and get the documents

    const querySnapshot = await getDocs(q);
   // console.log('snapshot',querySnapshot)


    //Initialize an empty object to store category mappings
    const categoryMappings= querySnapshot.docs.reduce((acc, docSnapshot)=>{
      const {title,items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
   
      return acc;
    },{})

    console.log('CM',categoryMappings);
    
    console.log('-4--categoryMappings["hats"]', categoryMappings["hats"])
    return categoryMappings;
  }



  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) =>{

      if(!userAuth) return;

      const userDocRef = doc(db,'users', userAuth.uid);
    // console.log('userdoc',userDocRef);
      const userSnapShot = getDoc(userDocRef);
      //console.log('userSnapShot', (await userSnapShot).exists())

    if(!userSnapShot.exists)
    { const { displayName,email } = userAuth;
      const createdAt = new Date(); 
      try{
          await setDoc(userDocRef,{
              displayName,
              email,
              createdAt,
              ...additionalInformation,
          });
      }
      catch(error){
          console.log('error creating the user',error)
      }
    }
    else{
      return userDocRef;

    }
  }


export const createAuthUserWithEmailAndPassword =async(email,password)=>{
    if(!email|| !password) return;
    
    return await createUserWithEmailAndPassword(auth,email,password);
}



export const signAuthUserWithEmailAndPassword =async(email,password)=>{
  if(!email|| !password) return;

  
  
  return await signInWithEmailAndPassword(auth,email,password);
}


export const signOutUser = async () => signOut(auth);



export const onAuthStateChangedListener =  (callback) => onAuthStateChanged(auth, callback);