import mongoose from 'mongoose';

const { Schema } = mongoose;

export const BlogSchema = new Schema({
    id:{type:mongoose.Types.ObjectId},
    title:String,
    description:String,
    authors:[String],
    date:{type:Date, default:Date.now},
    image:String,
    tags:[String],
    blogPost:String,
    outputRender:String,
    slug:String,
})



