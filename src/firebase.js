// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLZFtN6-PIUIllGh1dPSQZaHEko9ZETAk",
  authDomain: "todo-43aa9.firebaseapp.com",
  projectId: "todo-43aa9",
  storageBucket: "gs://todo-43aa9.appspot.com",
  messagingSenderId: "433219817495",
  appId: "1:433219817495:web:99d9e5f965852e2fcf4c52",
  databaseUrl: "https://todo-43aa9-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);

export default app;