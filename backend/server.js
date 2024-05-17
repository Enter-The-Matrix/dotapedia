import express from 'express'
import dotenv from 'dotenv'
import connectToMongoDB from './db/connectToMongoDB.js'
import herosRoutes from './routes/heros.routes.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/heros',herosRoutes)

app.listen(PORT ,()=>{
    connectToMongoDB()
    console.log('\x1b[36m%s\x1b[0m','server running on port:',PORT);
})