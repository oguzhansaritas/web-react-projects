import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAeDJWzw26XHE_pSpZJNaTk9j_Zmr6gXI8",
    authDomain: "mymoney-425f0.firebaseapp.com",
    projectId: "mymoney-425f0",
    storageBucket: "mymoney-425f0.appspot.com",
    messagingSenderId: "39039732377",
    appId: "1:39039732377:web:4abc22f722e3c8b7ab4608"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp 
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp } 