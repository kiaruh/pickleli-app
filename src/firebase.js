
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8glY2fsEQ690h6eiykRnxyQBpOnHpzS4",
  authDomain: "pickle-li-app.firebaseapp.com",
  projectId: "pickle-li-app",
  storageBucket: "pickle-li-app.appspot.com",
  messagingSenderId: "116113137645",
  appId: "1:116113137645:web:609675f67965b6163591e4",
  measurementId: "G-Y1JJTGWPTE"
};


const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)