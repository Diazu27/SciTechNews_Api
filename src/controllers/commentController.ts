import { Comment } from "../models/CommentModel";

export const getComments = async(req, res)=>{
    const CommentData = await Comment.find();
    res.status(200).json(CommentData)

}

export const postComments = async(req, res)=>{

    try{
        const Commentdata = new Comment(req.body);
        await Commentdata.save();

        res.status(200).json({msg:"Successful",Commentdata})

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdateComment =async (req, res) => {
    try{
        const Commentdata = await Comment.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json({msg:"Successful",Commentdata})

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getCommentById =async (req, res) => {
    const CommentData = await Comment.findById(req.params.id);
    res.status(200).json(CommentData)
}


export const DeleteComment = async (req, res) => {
    try{
        const Commentdata = await Comment.deleteOne({_id: req.params.id})
        res.status(200).json({msg:"Deleteed successful",Commentdata})

    }catch(error){
        res.status(400).json({error: error})
    }
}