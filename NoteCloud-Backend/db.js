const mongoose= require('mongoose');
const mongoURI="mongodb+srv://vishal001:vishal001@cluster0.cmnhh.mongodb.net/NoteCloud";

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connection successful")
}

module.exports=connectToMongo