// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBLaQlce1mJ1zhbn368nE0G5OgDGEkKt0",
  authDomain: "devs-hive.firebaseapp.com",
  projectId: "devs-hive",
  storageBucket: "devs-hive.appspot.com",
  messagingSenderId: "438102074559",
  appId: "1:438102074559:web:f4c47b160f2ab3d38cd20a",
  measurementId: "G-45DTHMC9JE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
