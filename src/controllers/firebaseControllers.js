

////////////////////////////////////////////////////////////////////////////////////////////////////
const { signInWithEmailAndPassword, signInWithPopup } = require('firebase/auth')
const {auth, provider} = require('./firebase')


const loginEmail = async (req,res) => {
    try {
        
        console.log(req)
        
        const email = req.body.email;
        const password = req.body.password;

        const loginEmail = await signInWithEmailAndPassword(auth, email, password)

        res.json(loginEmail);
        
    } catch (error) {
        // Manejar errores internos del servidor
        console.error('Error en el servidor:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const loginWithPopup =  async (req,res) => {
    try {
        

        const loginPopup = await signInWithPopup(auth, provider)

        res.json(loginPopup);
        
    } catch (error) {
        // Manejar errores internos del servidor
        console.error('Error en el servidor:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
} 

////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports= {
    loginEmail,
    loginWithPopup,
}