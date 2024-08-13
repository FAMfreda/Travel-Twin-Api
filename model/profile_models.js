import {Schema, model} from "mongoose"


const profileSchema = new Schema({
    userId :{
        type:String,
        required:true,
        unique:true,
    },


  name :{
    type:String,
    required: true,


  },

  
});

export const profileModel = model('profile', profileSchema)