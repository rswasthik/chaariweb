import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0iCabEymf3wmcKK28N2ItpA0wxK5F6AA",
  authDomain: "chaariwebsite.firebaseapp.com",
  projectId: "chaariwebsite",
  storageBucket: "chaariwebsite.appspot.com",
  messagingSenderId: "738454106291",
  appId: "1:738454106291:web:f83f507429b83ce27100c6",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
