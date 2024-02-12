import {initializeApp} from 'firebase/app';
import { 
        getAuth,
        signInWithRedirect, 
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
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

  const googleProvider = new GoogleAuthProvider();
  
  export const auth = getAuth();
  googleProvider.setCustomParameters({
    prompt:'select_account'
  })


  export const signInWithGooglePopup =() => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth,googleProvider);
  const db = getFirestore();

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