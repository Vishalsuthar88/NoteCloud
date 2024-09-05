const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = "GodzillaIsTheKingOfAllMonsters"
// Route 1:create a User using POST "/api/auth/createuser" no login required
router.post('/createuser',[
    body('name',"Enter a valid name.").isLength({min:3}),
    body('email',"Enter a valid email.").isEmail(),
    body('password',"Password must be atleast 5 characters.").isLength({min:5}),
], async(req,res)=>{ 
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(400).json({success:false,errors:errors.array()});
  }
  try {
    
 
  //check whether the user with this email exists already
  let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({success:false,error:"Sorry, User already exists with this email."})
    }

    const salt = await bcrypt.genSaltSync(10);
    const secPassword=await bcrypt.hash(req.body.password,salt);
   
    //create a new user
     user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPassword
    });
    const data={
        user:{
            id:user.id
        }
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    // console.log(authToken);
    // res.json(user)
    res.json({success:true,authToken})
    

} catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error.")
}
    
})

// Route 2:Authenticate a User using POST "/api/auth/login" no login required
router.post('/login',[
    body('email',"Enter a valid email.").isEmail(),
    body('password',"Password can not be blanked.").exists(),
], async(req,res)=>{ 
      // if there are errors return bad request and the errors
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
       return res.status(400).json({success:false, errors:errors.array()});
      }

      const {email,password} = req.body;
      try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, error:"Please enter correct credentials!" })
        }
        const comparedPassword= await bcrypt.compare(password,user.password);
        if(!comparedPassword){
            return res.status(400).json({success:false, error:"Please enter correct credentials!" })

        }
        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data, JWT_SECRET);
        res.json({success:true,authToken});
      } catch (error) {
        console.error(error.message)
        return res.status(500).send("Internal Server Error.")
      }

})
// Route 3:Get user details using POST "/api/auth/getuser" login required
router.post('/getuser',fetchuser, async(req,res)=>{ 

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(400).json({errors:errors.array()});
  }
  try {
     userId=req.user.id;
    const user=await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.error(error.message)
   return  res.status(500).send("Internal Server Error.")
  }
})

module.exports=router