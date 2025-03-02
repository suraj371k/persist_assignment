import mongoose from 'mongoose'

const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("mongodb connected successfully!!"))
    .catch(() => console.log("error in connection"))
}

export default connectDb;