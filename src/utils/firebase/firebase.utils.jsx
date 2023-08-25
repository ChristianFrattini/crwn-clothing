import {initializeApp} from 'firebase/app';  //initialize app creates an app instance based on a predifined config
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,  //observer. method that allows to keep track of signin/out events in order to change code
   } from 'firebase/auth' //auth services
import { getFirestore, 
  doc, //document instance method
  getDoc, //read method
  setDoc, 
  Firestore, collection, writeBatch, query, getDocs} from 'firebase/firestore'


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
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider)


  export const db= getFirestore(); //db instanciated. its possible to use the database

  export const addCollectionAndDocuments= async(collectionKey, objectToAdd)=>{
    const CollectionRef=collection(db, collectionKey) //the method is used to create a category within the db. collection key is the name of the category

    const batch=writeBatch(db)
    objectToAdd.forEach((object)=>{
      const docRef=doc(CollectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    })

    await batch.commit();
    console.log('Done')
  }

  export const getCategoriesAndDocuments=async()=>{ // method used for reading the categories and the docs inside firebase
    const collectionRef=collection(db, 'categories')
    const q=query(collectionRef);

    const querySnapShot=await getDocs(q);
    return querySnapShot.docs.map((docSnapshot)=>docSnapshot.data())
    //const categoryMap=querySnapShot.docs.reduce((acc, docSnapshot)=>{
      //const {title, items}=docSnapshot.data();
      //acc[title.toLowerCase()]=items
      //return acc
    //},{})

    //return categoryMap;
  }
  
  export const createUserDocumentFromAuth=async (userAuth, additionalInformation)=>{
    const userDocRef = doc(db,'users', userAuth.uid)

    //console.log(userDocRef);

    const userSnapshot=await getDoc(userDocRef);
    //console.log(userSnapshot);

    if(!userSnapshot.exists()){  //if document does not exist then create one
      const{ displayName, email}=userAuth;
      const createdAt= new Date(); // creates date

      try{
        await setDoc(userDocRef, {displayName,email,createdAt, ...additionalInformation})
      }catch (error){
        console.log('error creating the user', error.message)
      }
    }
    return userSnapshot;
  }

  export const createAuthUserWithEmailAndPassword=async( email,password)=>{  //authentication with user and password
    if(!email||!password) return;   //if email or password is not provided then exit
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword=async( email,password)=>{  //authentication with user and password
    if(!email||!password) return;   //if email or password is not provided then exit
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser =async()=> await signOut(auth);

  export const onAuthStateChangedListener=(callback)=> onAuthStateChanged(auth, callback)
  //open listener->its always listening for a change state in the auth process

  export const getCurrentUser=()=>{  //conversion user from observabe listener to action based function call
    return new Promise((resolve, reject)=>{
      const unsubscribe =onAuthStateChanged(
          auth,
          (userAuth)=>{
            unsubscribe();
            resolve(userAuth)
          },
          reject
      )
    })
  }