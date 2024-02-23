const {initializeApp} = require('firebase/app')
const {getAnalytics} = require('firebase/analytics')
const { getAuth, GoogleAuthProvider}  = require('firebase/auth')
const {getFirestore} = require('firebase/firestore')



const firebaseConfig = {
  apiKey: "AIzaSyDJ2eNBvcW2kUJ6YyOnIkkYLK_nxfHvt4M",
  authDomain: "saving-expenses-tracker.firebaseapp.com",
  projectId: "saving-expenses-tracker",
  storageBucket: "saving-expenses-tracker.appspot.com",
  messagingSenderId: "913565102534",
  appId: "1:913565102534:web:45e62b392da5febb4bc2c7",
  measurementId: "G-0SQLDDDEB7"
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider()
const auth = getAuth(appFirebase)

const db = getFirestore(appFirebase)



module.exports= {
    auth,
    db,
    provider
}