import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
apiKey: "AIzaSyAJ3Hp7MbirHUKTvT1Vq1_nk7UlXtG3-Fc",
  authDomain: "amaranoc-206fc.firebaseapp.com",
  databaseURL: "https://amaranoc-206fc-default-rtdb.firebaseio.com",
  projectId: "amaranoc-206fc",
  storageBucket: "amaranoc-206fc.firebasestorage.app",
  messagingSenderId: "929940257340",
  appId: "1:929940257340:web:ca3bce4323006e102ca139",
  measurementId: "G-01FZ7Y7S1Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);