import {initializeApp} from 'firebase/app';  //initialize app creates an app instance based on a predifined config
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth' //auth services
import { getFirestore, 
  doc, //document instance method
  getDoc, //read method
  setDoc, 
  Firestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAMSUQmeqdAOayQ3mu9N5yn4bI7jXY7aG4",
    authDomain: "crwn-clothing-db-4de90.firebaseapp.com",
    projectId: "crwn-clothing-db-4de90",
    storageBucket: "crwn-clothing-db-4de90.appspot.com",
    messagingSenderId: "305128966761",
    appId: "1:305128966761:web:fc4dc8ef7b06e8407670f8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);  //all the CRUD operations happen when 'firebaseApp' is called
  //CRUD: create read update delete

  const provider = new GoogleAuthProvider();  //to use goodle auth, initialize a provider
  provider.setCustomParameters({  
    prompt: "select_account"  // every time someone interacts with a provider, the user is forced to select an account
  });

  export const auth = getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth, provider) //provider and auth are both passed for authentication

  export const db= getFirestore(); //db instanciated. its possible to use the database
  
  export const createUserDocumentFromAuth=async (userAuth)=>{
    const userDocRef = doc(db,'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){  //if document does not exist then create one
      const{ displayName, email}=userAuth;
      const createdAt= new Date(); // creates date

      try{
        await setDoc(userDocRef, {displayName,email,createdAt})
      }catch (error){
        console.log('error creating the user', error.message)
      }
    }
    return userDocRef;
  }