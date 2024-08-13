import { Router } from "express";
import { addProfile, deleteProfile, getProfile, oneProfile, updateProfile } from "../controllers/profile_controllers.js";
import { isAuthenticated } from "../middleware/auth.js";



const profileRouter= Router();


profileRouter.post('/review/',addProfile )
profileRouter.get('/review/',isAuthenticated,  getProfile)
profileRouter.delete('/review/:id', deleteProfile)
profileRouter.get('/review/:id',isAuthenticated, oneProfile)
profileRouter.patch('/review/:id', updateProfile)


export default profileRouter