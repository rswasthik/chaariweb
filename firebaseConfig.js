import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbrTb_SNfBAVpKi3ZfQOf2nuAdml92txU",
  authDomain: "chaariapp.firebaseapp.com",
  projectId: "chaariapp",
  storageBucket: "chaariapp.appspot.com",
  messagingSenderId: "100964101641",
  appId: "1:100964101641:web:6b3bf18a9b2ceb35bf52d8",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
