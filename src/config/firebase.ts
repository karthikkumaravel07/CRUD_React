// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAatrCXkTneWiOQfmBHwhp8yeWobHaU930",
  authDomain: "social-react-app-362c3.firebaseapp.com",
  projectId: "social-react-app-362c3",
  storageBucket: "social-react-app-362c3.appspot.com",
  messagingSenderId: "373377881403",
  appId: "1:373377881403:web:3c25645b7ceafdd8f3d31e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);