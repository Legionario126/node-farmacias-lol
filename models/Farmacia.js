const mongoose = require('mongoose')
const Schema = mongoose.Schema

const farmaciaSchema = new Schema({
  nombre:String,
  direccion:String,
  open:{
    type:Boolean,
    default:true
  },
  photoURL:String  
},{
  timestamps:true
})

module.exports = mongoose.model('Farmacia', farmaciaSchema)