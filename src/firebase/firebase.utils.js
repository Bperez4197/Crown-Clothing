import firebase from "../../node_modules/firebase/compat/app";
import "../../node_modules/firebase/compat/firestore";
import "../../node_modules/firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDAel2ydYvkbPa2vm9gZmeYD1cZkziMDOU",
  authDomain: "crwn-db-6e06e.firebaseapp.com",
  projectId: "crwn-db-6e06e",
  storageBucket: "crwn-db-6e06e.appspot.com",
  messagingSenderId: "746447275217",
  appId: "1:746447275217:web:a55851738bbdcffa74b1f0",
  measurementId: "G-FFG0WJS300",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
