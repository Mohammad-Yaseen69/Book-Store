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
    publishDate: {
        type: String,
        required: true
    }
}, { timestamps: true })


export const Books = mongoose.model("Books", booksSchema)