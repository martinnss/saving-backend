const  OpenAI = require('openai')


const getCategories = async (req,res) => {
    try {
        
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_KEY,
        });
        
        const textOfSellers = req.body.textOfSellers;

        const completion = await openai.chat.completions.create({
            messages: [{"role": "system", "content": 'Identify a product category associated with a given seller name. If the provided name appears to be a personal name, classify it as a "small business." Generate a json ready to parse in javascript containing "seller" : "category" for every unique seller'},
                {"role": "user", "content": textOfSellers}],
            model: "gpt-3.5-turbo-1106",
            response_format: { type: "json_object" },
            temperature: 0.4
        });

        // Verifica si la respuesta de la API es exitosa
        if (completion.choices[0]) {
            res.json(completion);
        } else {
            console.error('Error en la respuesta de la API de OpenAI:', completion);
            
            res.status(500).json({ error: 'Internal Server Error' });
        }
        
    } catch (error) {
        // Manejar errores internos del servidor
        console.error('Error en el servidor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}




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

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const loginEmail = async (req,res) => {
    try {
        
        console.log(req)
        
        const textOfSellers = req.body.textOfSellers;

        const loginEmail = await signInWithEmailAndPassword(auth, email, password)

        res.json(completion);
        
    } catch (error) {
        // Manejar errores internos del servidor
        console.error('Error en el servidor:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

*/


module.exports= getCategories