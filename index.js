const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const taskRouter = require('./Routes/task.routes')
require('dotenv').config()

const connectToMongo = async () => {
    await mongoose.connect(require('./Config/url'), {
        useNewUrlParser: true,
        useUnifiedTopology: false,
        // authSource: 'admin',
    })
        .then(res => console.log(`Mongodb connect successfully`))
        .catch(err => console.log(`Mongodb connection error: ${err}`))
}



app.use(cors());
app.use(bodyParser.json())
app.use('/api/v1/task', taskRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server start successfully PORT: ${PORT}`);
    connectToMongo()
})