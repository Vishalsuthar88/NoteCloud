const mongoose= require('mongoose');
const mongoURI=process.env.MONGO_URI;
const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connection successful")
}

module.exports=connectToMongo