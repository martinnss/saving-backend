const PORT = 8000
const express = require('express')
const cors = require('cors')

const  dotenv = require ('dotenv')
dotenv.config()

const  getCategories = require('./controllers/openaiControllers.js')




const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Agrega tu dominio local
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //cors({ origin: 'http://localhost:3000' });
  next();
});
//app.use(cors({ origin: 'http://localhost:3000' }));



app.get('/hello', (req,res) => {
    res.json('hi')
})



app.listen(8000, () => console.log(`Server is running on port ${PORT}`))

app.use(express.json())


app.post('/get-category', getCategories)


//////////////////////////////////////////////////////////////////////////////////////////////////// firebase
/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDJ2eNBvcW2kUJ6YyOnIkkYLK_nxfHvt4M",
  authDomain: "saving-expenses-tracker.firebaseapp.com",
  projectId: "saving-expenses-tracker",
  storageBucket: "saving-expenses-tracker.appspot.com",
  messagingSenderId: "913565102534",
  appId: "1:913565102534:web:45e62b392da5febb4bc2c7",
  measurementId: "G-0SQLDDDEB7"
};

console.log(firebaseConfig)

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const analytics = getAnalytics(appFirebase);

export const provider = new GoogleAuthProvider()
export const auth = getAuth(appFirebase)

export const db = getFirestore(appFirebase)

////////////////////////////////////////////////////////////////////////////////////////////////////




*/



module.exports =app 