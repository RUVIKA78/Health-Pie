import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({

  userId: {
    type: String

  },
  userEmail: {
    type: String,

  },

  fullName: {
    id: {
      type: String

<<<<<<< HEAD
=======
      id: {
        type: String
        
      },
      email: {
        type: String,
        required : true,
      },
    
      name: {
        type: String,
        required: true,
      },
      
      phone:{
          type:Number,
          required:true
      },
      document:{
        data: Buffer, 
        contentType: String
      },
      clinic:{
        type:String,
        required:true
      },
      designation:{
        type:String,
        required:true
      },
      experience:{
        type:String,
        required:true
      },
      speciality:{
        type:String,
        requred:true
      },
      password:{
        type : String,
        required : true
      },
>>>>>>> 3ad971eb6b842580dbaf40db9698fd24196be249
    },
    email: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true
    },
    document: {
      type: File,
        data: Buffer,
      contentType: String
    },
    clinic: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    speciality: {
      type: String,
      requred: true
    },
      speciality: {
      type: String,
      requred: true
    },
    password: {
      type: String,
      required: true
    },
  },
    
    timestamps: true
  }


)

export default mongoose.model("Doctor", doctorSchema);
