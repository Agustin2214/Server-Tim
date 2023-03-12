const User = require("../models/user")
const bcrypt = require('bcryptjs')


const UserGet = async (req,res)=>{

    const user= await User.findAll()

    res.json(user)
}

const userPost = async (req,res)=>{
    let  {name, password,email}  = req.body;
    console.log(name)
 
  try{

  const user = new User({name, password,email})

  const existsUser = await User.findOne({where:{email: email}})
  
  if(existsUser){
    return res.status(400).json({msg: 'correo ya registrado'})
  }

  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(password, salt)

  await user.save();
  

  res.json({
            user,
            
        });
}catch(error){
    console.log(error)
    res.json({msg: error})
  }
}


module.exports = {UserGet, userPost}