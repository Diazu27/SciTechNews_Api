import { PostModel } from '../models/PostModel';

export const getPost = async(req, res)=>{
    const postData = await PostModel.find();
    res.status(200).json(postData, {Prueba:"d"})

}

export const savePost = async(req, res)=>{

    try{
        const postData = new PostModel(req.body);
        await postData.save();
        res.status(200).json({msg:"Successful",postData})

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdatePost =async (req, res) => {
    try{
        const postData = await PostModel.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json({msg:"Successful",postData})

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getPostById =async (req, res) => {
    const postData = await PostModel.findById(req.params.id);
    res.status(200).json(postData)
}


export const DeletePost = async (req, res) => {
    try{
        const postData = await PostModel.deleteOne({_id: req.params.id})
        res.status(200).json({msg:"Deleteed successful",postData})

    }catch(error){
        res.status(400).json({error: error})
    }
}