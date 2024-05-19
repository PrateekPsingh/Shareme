
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnDYdGNPY4uxMeEZgUVqu51Sy4TKWJgtw",
  authDomain: "shareme-2add7.firebaseapp.com",
  projectId: "shareme-2add7",
  storageBucket: "shareme-2add7.appspot.com",
  messagingSenderId: "821862739523",
  appId: "1:821862739523:web:358b59c85ff3c24afbeef6",
  measurementId: "G-N2C3GMGLSK"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);



 export {app};


