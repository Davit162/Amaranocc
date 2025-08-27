import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyD2p8rBHB9aYR-e4rQ_vaj-bRlIiq1iKeo",
  authDomain: "amaranoctypescript.firebaseapp.com",
  projectId: "amaranoctypescript",
  storageBucket: "amaranoctypescript.firebasestorage.app",
  messagingSenderId: "635003527078",
  appId: "1:635003527078:web:e3f123b6124cac6c803967",
  measurementId: "G-LF0T5BHL0R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);