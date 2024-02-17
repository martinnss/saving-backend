const PORT = 8000
import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config()

import  getCategories from './controllers/openaiControllers.mjs'




const app = express()

app.use(cors()) 



app.get('/hello', (req,res) => {
    res.json('hi')
})



app.listen(8000, () => console.log(`Server is running on port ${PORT}`))

app.use(express.json())


app.post('/get-category', getCategories)

