const mongoose = require("mongoose");
const mongoRUI = require('./key.json').mongoURI;

const connectDB = async ()=>{
    try {
        await mongoose.connect(mongoRUI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
          });
          console.log("MongoDB Connected");
    } catch(err){
        console.error(err)
    }
};

module.export = connectDB