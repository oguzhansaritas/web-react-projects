import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD4v5cnBWo4uu98UbuhSyXSudRy54sZYrQ",
    authDomain: "thedojo-c6a63.firebaseapp.com",
    projectId: "thedojo-c6a63",
    storageBucket: "thedojo-c6a63.appspot.com",
    messagingSenderId: "529984601627",
    appId: "1:529984601627:web:a066735909feacc10a82be"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage() 

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp}