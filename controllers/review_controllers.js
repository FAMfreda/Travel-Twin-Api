import { reviewModel } from "../model/review_modules.js"


//post profile
export const addReview = async (req, res, next) => {
    try {
        const addData = await reviewModel.create(req.body)
        res.status(201).json(addData)
        console.log( 'contact added')
    } catch (error) {
        next(error)  
    }

}


//get profile
export const getReview = async (req,res, next) => {
    try {
        const getData = await reviewModel.find()
        res.status(201).json(getData)
        
    } catch (error) {
        next(error)
    }
}

//get a single Preview
export const oneReview =async (req, res, next) => {
    try{
        const oneData = await reviewModel.findById(req.params.id)
        res.status(201).json(oneData)
    } catch (error){
        next (error)
    }
}

//update review
export const updateReview = async (req, res, next) =>{
    try {
       
        const updateData = await reviewModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json("Contact updated")
     
    } catch (error) {
        next (error)
        
    }
}


//delete review
export const deleteReview =async (req, res, next) =>{
try {

    const deletedReview =await reviewModel. findByIdAndDelete (req.params.id)
     res.status(201).json('details  deleted')
     
} catch (error) {
    next(error)
    
}

}