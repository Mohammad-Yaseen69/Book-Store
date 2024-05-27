import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Books } from "../models/books.model.js"


const addBook = asyncHandler(async (req, res, next) => {
    const { title, author, summery, publishDate } = req.body

    if (!title || !author || !summery || !publishDate) {
        throw new ApiError("All Fields are required", 400)
    }

    const book = await Books.create({
        title,
        author,
        summery,
        publishDate
    })

    if (!book) {
        throw new ApiError("Book not created", 400)
    }

    res.status(200).json(
        new ApiResponse("Book Added Successfully", book, 200)
    )
})

export {
    addBook
}