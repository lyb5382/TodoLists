const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
mongoose.connect(process.env.MONGO_URI).then(() => console.log("db 연결 완료!")).catch((err) => console.log(err))

const todoRoutes = require('./routes/todoRoutes')
app.use('/api/todos', todoRoutes)



app.get('/', (res, req) => { res.send('hello') })

app.listen(PORT, () => { console.log(`server run: https://localhost:${PORT}`) })