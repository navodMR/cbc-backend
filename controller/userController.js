import User from "../models/user.js";
import bcrypt from "bcrypt";

function createUser (req , res){
const newUserData = req.body
newUserData.password = bcrypt.hashSync(newUserData.password,10) 
const user = new User(newUserData)

user.save().then(()=>{res.json({
    message: "user created"
})
}).catch(()=>{res.json({
    message: "user not create"
})})


}

export{createUser};
