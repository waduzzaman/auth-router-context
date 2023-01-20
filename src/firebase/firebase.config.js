// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxuX-PPJafhsVeeKZtRcI5-8OG0BqQ0xY",
  authDomain: "auth-router-context-66021.firebaseapp.com",
  projectId: "auth-router-context-66021",
  storageBucket: "auth-router-context-66021.appspot.com",
  messagingSenderId: "921536508835",
  appId: "1:921536508835:web:1c471e379a9a51a4852016",
  measurementId: "G-VT27SYMV1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;