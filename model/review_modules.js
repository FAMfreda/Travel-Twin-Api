import { Schema,model } from "mongoose"





const reviewSchema = new Schema ({
     userId :{
        type:String,
        required:true,
     },

     projectId:{
        type:String,
        required:true,
     },

})

export const reviewModel = model('review', reviewSchema)
