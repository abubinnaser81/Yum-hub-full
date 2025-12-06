import mongoose from "mongoose";

export const connectDB = async () =>{
 await mongoose.connect('mongodb+srv://abunaser50032:1234567890@cluster0.nufw2g3.mongodb.net/Yum-Hub').then(()=>console.log("DB Connected"));
}
