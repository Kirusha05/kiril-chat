import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAFO-B3WlZv7ESSY5NuPpgfnUKRFqNdZAg",
  authDomain: "kiril-chat.firebaseapp.com",
  projectId: "kiril-chat",
  storageBucket: "kiril-chat.appspot.com",
  messagingSenderId: "1069087742754",
  appId: "1:1069087742754:web:084a40d3b1c51bace0237b",
  databaseURL: "https://kiril-chat-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const rtdb = getDatabase(app);