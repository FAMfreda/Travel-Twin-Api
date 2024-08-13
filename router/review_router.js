import { Router } from "express";
import { addReview, deleteReview, getReview, oneReview, updateReview } from "../controllers/review_controllers.js";
import { isAuthenticated } from "../middleware/auth.js";




const reviewRouter= Router();


reviewRouter.post('/review/', addReview )
reviewRouter.get('/review/',isAuthenticated, getReview)
reviewRouter.delete('/review/:id', deleteReview)
reviewRouter.get('/review/:id',isAuthenticated, oneReview)
reviewRouter.patch('/review/:id', updateReview)


export default reviewRouter