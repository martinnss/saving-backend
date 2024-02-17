const PORT = 8000
const express = require('express')
const cors = require('cors')

const  dotenv = require ('dotenv')
dotenv.config()

const  getCategories = require('./controllers/openaiControllers.js')




const app = express()

app.use(cors({ origin: 'http://localhost:3000' }));



app.get('/hello', (req,res) => {
    res.json('hi')
})



app.listen(8000, () => console.log(`Server is running on port ${PORT}`))

app.use(express.json())


app.post('/get-category', getCategories)

module.exports =app 