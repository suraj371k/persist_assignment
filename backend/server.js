import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import challengeRoute from './routes/challengeRoutes.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 8500


app.use(cors())
app.use(express.json())

//routes
app.use('/api/challenges', challengeRoute)

//mongodb connection
connectDb()

app.listen(port , () => {
    console.log((`app is running successfully at ${port}`))
})