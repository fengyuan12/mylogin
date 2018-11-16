const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  username:String,
  name:String,
  password:String,
  phone:Number,
  email:String,
  is_active:Boolean,
  create_time:String
})
UserSchema.statics = {
  getUserByName:function(username){
    return new Promise((resolve,reject)=>{
      Usershuju.findOne({username},(err,doc)=>{
        if(err){
          reject(err)
        }else{
          resolve(doc)
        }
      })
    })
  }
}
const Usershuju = mongoose.model('Usershuju',UserSchema)
module.exports = Usershuju
