import {initializeApp} from 'firebase/app';
import { 
         getAuth,
         signInWithRedirect, 
         signInWithPopup,
        GoogleAuthProvider,
     } from 'firebase/auth';
import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    promt:"select_account"
  })

  export const auth = getAuth();
  provider.setCustomParameters({
    prompt:'select_account'
  })
  export const signInWithGooglePopup =() => signInWithPopup(auth,provider);

  const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) =>{
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
            createdAt
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