// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"

import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBAZ_BowDo3Igr7JKsGOEpeldKPYDjbnfE",

  authDomain: "netflixgpt-fe39f.firebaseapp.com",

  projectId: "netflixgpt-fe39f",

  storageBucket: "netflixgpt-fe39f.appspot.com",

  messagingSenderId: "313750119163",

  appId: "1:313750119163:web:07daac868de0901c73065e",

  measurementId: "G-7LCLGE7DG3",
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

export const auth = getAuth()
