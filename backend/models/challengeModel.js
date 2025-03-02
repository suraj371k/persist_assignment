import mongoose, { Schema } from "mongoose";

const challengeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    funding: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
    },
    description: {
        type: String,
        required: true
    },
     visible: {
        type: Boolean,
        default: true
     }
})

const Challenge = mongoose.model("Challenge" , challengeSchema)
export default Challenge;