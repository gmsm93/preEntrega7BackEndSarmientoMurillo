import mongoose from "mongoose"

const mongoosePaginate = require('mongoose-paginate-v2')
const cartCollection = 'carts'

const cartSchema = new mongoose.Schema({
    cartId:{type:String, unique:true},
    id:{type:String},
    title:{type:String},
    description:{type:String},
    code:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    category:{type:String},
    thumbnails:{type:String}
  })

cartSchema.plugin(mongoosePaginate)

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel