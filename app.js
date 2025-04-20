require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router/contact.route')
const connectTo = require('./config/db')
const cors = require('cors')
const morgan = require('morgan')
connectTo()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(cors({
    origin: ['https://codetanish.vercel.app/'],
    methods: ['POST', 'GET']
}))

app.use('/api', router)


app.listen(5000, ()=>{
    console.log('server is running');
})