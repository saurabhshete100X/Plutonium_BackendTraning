const UserModel = require('../Model/userModel');




 const createUser = async function(req,res){

    let data = req.body 
    console.log(data)

    let savedData= await UserModel.create(data)
    


    res.send({msg:savedData})
}

const getUser = async function(req,res){
    
    let allusers =await UserModel.find()


    res.send({msg:allusers})
}

module.exports.createUser=createUser
module.exports.getUser=getUser