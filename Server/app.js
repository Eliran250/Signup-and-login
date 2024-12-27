const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const indexRouter = require("./Routes/indexRouter");
const cookieParser = require("cookie-parser");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRouter);
app.use(cookieParser());


const URI = process.env.URI;
const connectDB = async () => {
    try 
    {
        await mongoose.connect(URI);
        console.log("You are connected to mongoDB");
    }
    catch (error)
    {
        console.log("You aren't connected to mongoDB" + error);
    }
}
connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Running on PORT:" + PORT);
})
