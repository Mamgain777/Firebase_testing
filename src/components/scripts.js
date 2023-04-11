import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBlSoVo2cBqk99q7rLwiiy8CmXBU9EKneM",
    authDomain: "moodi-e4d67.firebaseapp.com",
    databaseURL: "https://moodi-e4d67-default-rtdb.firebaseio.com",
    projectId: "moodi-e4d67",
    storageBucket: "moodi-e4d67.appspot.com",
    messagingSenderId: "859018505309",
    appId: "1:859018505309:web:b2f7dd2edde6de834eb1b4",
    measurementId: "G-P2PT71012B"
  };

  // Initialize Firebase
  export const  app = initializeApp(firebaseConfig);