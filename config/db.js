import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Conneced to Database ${conn.connection.host}`.bgMagenta)
    } catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed)
    }
};

export default connectDB;