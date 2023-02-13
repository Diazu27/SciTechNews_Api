import { User } from "../models/userModel";

export const getUsers = (req, res)=>{
    res.send("Hola desde usuarios");
}

export const postUsers = async(req, res)=>{

    try{
        const userdata = new User(req.body);
        await userdata.save();

        res.status(200).json({msg:"Successful",userdata})

    }catch(error){
        res.status(400).json({error: error})
    }
}