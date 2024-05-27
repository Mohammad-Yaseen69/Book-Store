import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summery: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    }
}, { timestamps: true })


export const Books = mongoose.model("Books", booksSchema)