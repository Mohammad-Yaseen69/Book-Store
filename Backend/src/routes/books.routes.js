import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/books.controller.js";
import { Router } from "express";

const router = Router()

router.route("/").post(addBook).get(getAllBooks)

router.route("/:id")
    .get(getBookById)
    .patch(updateBook)
    .delete(deleteBook)

export default router
