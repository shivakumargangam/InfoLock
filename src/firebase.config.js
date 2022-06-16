import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjmxYqgkeBjglikVJhEJTdR9ajjyQsc-k",
  authDomain: "infolock079164.firebaseapp.com",
  databaseURL:
    "https://infolock079164-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "infolock079164",
  storageBucket: "infolock079164.appspot.com",
  messagingSenderId: "334475252001",
  appId: "1:334475252001:web:a9c67a602611c13ff16e60",
};
const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
console.log(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export default {app,firestore,storage};
