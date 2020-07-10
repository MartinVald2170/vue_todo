import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcKh6xBt8d_LqBYUaNRGrV7ovXYxP-rZA",
    authDomain: "vue-fire-todo-cd431.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-cd431.firebaseio.com",
    projectId: "vue-fire-todo-cd431",
    storageBucket: "vue-fire-todo-cd431.appspot.com",
    messagingSenderId: "919947910344",
    appId: "1:919947910344:web:93bf76ba126b823ed5d9fd"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();