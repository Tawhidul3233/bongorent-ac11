// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBDdZ5XrGCho1gBT0eBbcITbYDHIg3Za28",
//   authDomain: "bongorent-96f21.firebaseapp.com",
//   projectId: "bongorent-96f21",
//   storageBucket: "bongorent-96f21.appspot.com",
//   messagingSenderId: "294370566617",
//   appId: "1:294370566617:web:8424c2339469be7efc39c8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);