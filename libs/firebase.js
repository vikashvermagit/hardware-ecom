import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import  { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()

export const storage = firebase.storage()

export const db = firebase.firestore()

export const firebase_app = firebase
export const firebaseApp = initializeApp(firebaseConfig);
