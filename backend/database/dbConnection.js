import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HEALTH_MANAGEMENT"
    }).then(()=>{
        console.log("Connected to database! ");
    }).catch((err)=>{
        console.log(`Some Error occured while connecting to database ${err}`);
    })
}
