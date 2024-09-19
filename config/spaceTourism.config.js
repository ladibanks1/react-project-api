import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
const connectToDatabase = async() => {
    try {
        await mongoose.connect(`${uri}/space_tourism`)
        console.log("Connected to Database");
    } catch (error) {
        console.log("Unable to connect to Database" , error.message);
    }
}



export default connectToDatabase