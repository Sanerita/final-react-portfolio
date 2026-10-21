import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQwDL-aTian6cqnWmVsFU3FWkFOTPxRCg",
  authDomain: "contactformdata-92042.firebaseapp.com",
  projectId: "contactformdata-92042",
  storageBucket: "contactformdata-92042.appspot.com",
  messagingSenderId: "819049053747",
  appId: "1:819049053747:web:c035a668302212477ead46"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);