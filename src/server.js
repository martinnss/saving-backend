const PORT = 8000
const express = require('express')
const cors = require('cors')


const  dotenv = require ('dotenv')
dotenv.config()

const  getCategories = require('./controllers/openaiControllers.js')



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










module.exports =app 