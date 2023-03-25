const express = require('express')  
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const UserRouter = require('./Routes/UserRouter')
const PostRouter = require('./Routes/PostRouter')
const MovieRouter = require('./Routes/MovieRouter')

mongoose.set('strictQuery', false)

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.use('/user',UserRouter)
app.use('/news',PostRouter)
app.use('/movies',MovieRouter)



mongoose.connect(process.env.DBURL,()=>{console.log('DB connected')})
app.listen(process.env.URL ,()=>{console.log(`Server is running on ${process.env.URL}`)})