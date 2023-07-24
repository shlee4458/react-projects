import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBIykpu38QYI7u2HPB-ieGCysu6iczL330",
  authDomain: "react-notes-f86bf.firebaseapp.com",
  projectId: "react-notes-f86bf",
  storageBucket: "react-notes-f86bf.appspot.com",
  messagingSenderId: "972213790634",
  appId: "1:972213790634:web:00f6e10ce8262a18f66dd3"
};

// initialize the app with the config
const app = initializeApp(firebaseConfig);

// export the firestore collection
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")