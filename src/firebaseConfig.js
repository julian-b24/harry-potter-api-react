// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7kDAh_LCkbgN1Go4zcBhFZsvQXm9rQU",
  authDomain: "potter-wiki.firebaseapp.com",
  projectId: "potter-wiki",
  storageBucket: "potter-wiki.appspot.com",
  messagingSenderId: "451329581720",
  appId: "1:451329581720:web:2dbabb2f2fd338943e66ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;
