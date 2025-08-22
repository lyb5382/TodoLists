const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser")
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors({ origin: process.env.FRONT_ORIGIN, credentials: true }))
mongoose.connect(process.env.MONGO_URI).then(() => console.log("db 연결 완료!")).catch((err) => console.log(err))
app.use(cookieParser())

const todoRoutes = require('./routes/todoRoutes')
app.use('/api/todos', todoRoutes)

const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => { res.send('hello') })

app.listen(PORT, () => { console.log(`server run: http://localhost:${PORT}`) })