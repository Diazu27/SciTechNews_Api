import { Post } from "../models/PostModel";

export const getPost = async(req, res)=>{
    const postData = await Post.find();
    res.status(200).json(postData)
}

export const savePost = async(req, res)=>{

    try{
        const postData = new Post(req.body);
        await postData.save();
        res.status(200).json(postData)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdatePost =async (req, res) => {
    try{
        const postData = await Post.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json(postData)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getPostById =async (req, res) => {
    const postData = await Post.findById(req.params.id);
    res.status(200).json(postData)
}


export const DeletePost = async (req, res) => {
    try{
        const postData = await Post.deleteOne({_id: req.params.id})
        res.status(200).json(postData)

    }catch(error){
        res.status(400).json({error: error})
    }
}