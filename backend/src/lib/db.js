import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to Streamify_db : ${conn.connection.host}`);
    }catch(error){
        console.log("Error in connecting to MongoDB",error);
        process.exit(1);
    }
}