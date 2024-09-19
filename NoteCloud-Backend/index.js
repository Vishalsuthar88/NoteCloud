// require('dotenv').config();
const connectToMongo=require('./db')
const cors = require('cors')


connectToMongo();

const express = require('express')
const app = express()
const port = 5000
//middleware
app.use(cors())
app.use(express.json())
//available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`NoteCloud app listening on port ${port}`)
})
