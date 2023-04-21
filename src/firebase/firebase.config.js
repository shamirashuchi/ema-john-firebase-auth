// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqebTsTr_yFcDMgjNTR6IqvhBhWR1teLg",
  authDomain: "ema-john-with-firebase-a-a0b97.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-a0b97",
  storageBucket: "ema-john-with-firebase-a-a0b97.appspot.com",
  messagingSenderId: "988086088397",
  appId: "1:988086088397:web:499f4fae7094a143ff6f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;