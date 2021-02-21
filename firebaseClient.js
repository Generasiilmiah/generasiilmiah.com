import firebase from "firebase";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBRXpXtZxo5VnogmuJ-uJANAwYQ6E1E9Y8",
  authDomain: "generasi-ilmiah-web.firebaseapp.com",
  databaseURL: "https://generasi-ilmiah-web-default-rtdb.firebaseio.com/",
  projectId: "generasi-ilmiah-web",
  storageBucket: "generasi-ilmiah-web.appspot.com",
  messagingSenderId: "233255754923",
  appId: "1:233255754923:web:56ff5020c3baae27f4abee",
  measurementId: "G-SWSCZYPDR2",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
