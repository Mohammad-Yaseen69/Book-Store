import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Books } from "../models/books.model.js"


const addBook = asyncHandler(async (req, res) => {
    const { title, author, summery, publishYear } = req.body

    if (!title || !author || !summery || !publishYear) {
        throw new ApiError("All Fields are required", 400)
    }

    const book = await Books.create({
        title,
        author,
        summery,
        publishYear
    })

    if (!book) {
        throw new ApiError("Book not created", 400)
    }

    res.status(200).json(
        new ApiResponse("Book Added Successfully", book, 200)
    )
})

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Books.find()

    if (!books) {
        throw new ApiError("No Books Found", 404)
    }

    const obj = {
        count: books.length,
        books: books
    }

    res.status(200).json(
        new ApiResponse("Books Fetched Successfully", obj, 200)
    )
})

const getBookById = asyncHandler(async (req, res) => {
    const { id } = req.params

    const book = await Books.findById(id)

    if (!book) {
        throw new ApiError("Book not Found", 404)
    }

    res.status(200).json(
        new ApiResponse("Book Fetched Successfully", book, 200)
    )
})

const updateBook = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, author, summery, publishYear } = req.body

    const obj = {}

    if(title) obj.title = title
    if(author) obj.author = author
    if(summery) obj.summery = summery
    if(publishYear) obj.publishYear = publishYear

    if(!obj) {
        throw new ApiError("No Fields to Update", 400)
    }

    const book = await Books.findByIdAndUpdate(id, obj, { new: true })

    res.status(200).json(
        new ApiResponse("Book Updated Successfully", book, 200)
    )
})

const deleteBook = asyncHandler(async (req, res) => {
    const { id } = req.params

    const book = await Books.findById(id)

    if (!book) {
        throw new ApiError("Book not Found", 404)
    }
    
    const deletedBook = await Books.findByIdAndDelete(id)

    res.status(200).json(
        new ApiResponse("Book Deleted Successfully", null, 200)
    )
})

export {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}