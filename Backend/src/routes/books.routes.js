import { addBook } from "../controllers/books.controller.js";
import { Router } from "express";

const router = Router()

router.post("/", addBook)

export default router
