import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkkYhmv5AL0D1DKuiA_JOoeUSDFP9VjBk",
    authDomain: "e-commerce-store-2021.firebaseapp.com",
    projectId: "e-commerce-store-2021",
    storageBucket: "e-commerce-store-2021.appspot.com",
    messagingSenderId: "394299283750",
    appId: "1:394299283750:web:745f798b92a92a5b0e49e7",
    measurementId: "G-PPTGNQ3X70"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log("Error creating users ...", error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
