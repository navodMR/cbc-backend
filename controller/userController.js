import User from "../models/user.js";

function createUser (req , res){

const user = new User(req.body)

user.save().then(()=>{res.json({
    message: "user created"
})
}).catch(()=>{res.json({
    message: "user not create"
})})


}

export{createUser};
