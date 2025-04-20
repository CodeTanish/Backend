require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router/contact.route')
const connectTo = require('./config/db')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.Backend_Port
const ORIGIN = process.env.Origin_Url
connectTo()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(cors({
    origin: [ORIGIN],
    methods: ['POST', 'GET']
}))

app.use('/api', router)


app.listen(PORT, ()=>{
    console.log('server is running');
})