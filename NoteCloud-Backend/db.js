const mongoose= require('mongoose');
const mongoURI="mongodb://localhost:27017/NoteCloud"
const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connection successful")
}

module.exports=connectToMongo