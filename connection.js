const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://Gsathiya:capstoneproject@cluster0.ktemn.mongodb.net/CHATAPP?retryWrites=true&w=majority`,()=>{
    console.log("DB connected")
})
