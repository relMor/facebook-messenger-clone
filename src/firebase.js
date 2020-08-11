import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCl6I5fo4I40mU7wLROwcV1WXSRtaWPdVA",
  authDomain: "facebook-messenger-clone-a76a5.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a76a5.firebaseio.com",
  projectId: "facebook-messenger-clone-a76a5",
  storageBucket: "facebook-messenger-clone-a76a5.appspot.com",
  messagingSenderId: "822022943589",
  appId: "1:822022943589:web:4fd8a9b20badf88f5f278c",
  measurementId: "G-14EVSKV29L",
});

const db = firebaseApp.firestore();

export default db;
