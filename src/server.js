const PORT = 8000
const express = require('express')
const cors = require('cors')

const admin = require('firebase-admin')
const credentials = require('./saving-expenses-tracker-firebase-adminsdk-lg6xg-3a0e1d618e.json')

const  dotenv = require ('dotenv')
dotenv.config()

const  getCategories = require('./controllers/openaiControllers.js')

admin.initializeApp({
  credential:admin.credential.cert(credentials)
})



const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))

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


//////////////////////////////////////////////////////////////////////////////////////////////////// openai
app.post('/get-category', getCategories)


//////////////////////////////////////////////////////////////////////////////////////////////////// firebase
const {loginEmail,loginWithPopup} = require('./controllers/firebaseControllers')
const { PagePromise } = require('openai/core.js')
const {GoogleAuthProvider} = require('firebase/auth')

app.post('/login-with-email-password', loginEmail)
app.get('/login-with-popup', loginWithPopup)



////login
app.post('/login-with-credentials', async (req,res) =>{
  const user = {
    email:req.body.email,
    password: req.body.password,
  }
  const userResponse = await admin.auth().createUser({
    email: user.email,
    password: user.password,
    emailVerified: false,
    disabled: false
  });

  res.json(userResponse)
})


///// user info


app.post('/get-user-info', async (req,res) =>{

  try {
    // Check for valid authentication (replace with your authentication mechanism)
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Extract user ID from the authenticated session (adjust based on your setup)
    const userId = req.user.id; // Replace with the appropriate field based on your user object

    // Fetch user data from your database
    const userDoc = await admin.firestore().collection('users').doc(userId).get();
    const userData = userDoc.exists ? userDoc.data() : null;

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Sanitize sensitive information before sending response
    delete userData.password; // Example: Remove sensitive fields

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving user information' });
  }

} )





app.post('/get-user-info', async (req,res) =>{
  
} )

app.post('/get-user-info', async (req,res) =>{
  
} )

app.post('/get-user-info', async (req,res) =>{
  
} )





module.exports =app 