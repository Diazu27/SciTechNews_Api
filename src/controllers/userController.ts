import { User } from "../models/userModel";

export const getUsers = async(req, res)=>{
    const userData = await User.find();
    res.status(200).json(userData)

}

export const postUsers = async(req, res)=>{

    try{
        const userdata = new User(req.body);
        await userdata.save();

        res.status(200).json(userdata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdateUser =async (req, res) => {
    try{
        const userdata = await User.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json(userdata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getUserById =async (req, res) => {
    const userData = await User.findById(req.params.id);
    res.status(200).json(userData)
}


export const DeleteUser = async (req, res) => {
    try{
        const userdata = await User.deleteOne({_id: req.params.id})
        res.status(200).json(userdata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const AuthUser =async (req, res) => {
    const userData = await User.find({email:req.body.email, password:req.body.password}).count();
    if(userData == 1){
        res.status(200).json({auth:true})
    }else{
        res.status(200).json({auth:false})
    }
    
    
}