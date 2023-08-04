import {initializeApp} from 'firebase/app';  //initialize app creates an app instance based on a predifined config
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth' //auth services

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