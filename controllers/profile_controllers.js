import { profileModel } from "../model/profile_models.js";



//post controller
export const addProfile = async (req, res, next) => {
    try {
        const addData = await profileModel.create(req.body)
        res.status(201).json(addData)
        console.log( 'details added')
    } catch (error) {
        next(error)  
    }

}


//get controller
export const getProfile = async (req,res, next) => {
    try {
        const getData = await profileModel.find()
        res.status(201).json(getData)
        
    } catch (error) {
        next(error)
    }
}

//get a single contact
export const oneProfile =async (req, res, next) => {
    try{
        const oneData = await profileModel.findById(req.params.id)
        res.status(201).json(oneData)
    } catch (error){
        next (error)
    }
}

//update profi;e
export const updateProfile = async (req, res, next) =>{
    try {
       
        const updateData = await profileModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json(" profile updated")
     
    } catch (error) {
        next (error)
        
    }
}


//delete profile
export const deleteProfile =async (req, res, next) =>{
try {

    const deletedProfile =await profileModel. findByIdAndDelete (req.params.id)
     res.status(201).json('profile deleted')
     
} catch (error) {
    next(error)
    
}

}