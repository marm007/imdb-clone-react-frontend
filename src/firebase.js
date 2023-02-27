// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuWlZ7OymPjk6COYER5EUebjEK1xYaiEE",
  authDomain: "imdb-clone-75e03.firebaseapp.com",
  projectId: "imdb-clone-75e03",
  storageBucket: "imdb-clone-75e03.appspot.com",
  messagingSenderId: "859258488974",
  appId: "1:859258488974:web:e8bb70c6e310bb3f44e1df",
  measurementId: "G-8XY3HW5JED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export default app;
