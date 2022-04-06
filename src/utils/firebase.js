import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU9ZfFVuhHZlsWzdIBGGZfJHVak0Fbt4M",
  authDomain: "tradercave-ca155.firebaseapp.com",
  projectId: "tradercave-ca155",
  storageBucket: "tradercave-ca155.appspot.com",
  messagingSenderId: "371935915940",
  appId: "1:371935915940:web:608364f34c2c05ba12db31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
