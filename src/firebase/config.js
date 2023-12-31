import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC8ZnHWXTlEBagi3e3r-H6kV4McSqgcl-M",
    authDomain: "vue-firebase-backend-22e0c.firebaseapp.com",
    projectId: "vue-firebase-backend-22e0c",
    storageBucket: "vue-firebase-backend-22e0c.appspot.com",
    messagingSenderId: "1036034713375",
    appId: "1:1036034713375:web:8e1ef37c9398808249b22a"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage  = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }