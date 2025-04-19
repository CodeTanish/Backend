const mongoose = require('mongoose')

function connectTo (){
    mongoose.connect(process.env.mongo_url).then(()=>{
        console.log('connect to db');
    }).catch((err) => console.error(err))
}

module.exports = connectTo