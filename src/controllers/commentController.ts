import { Comment } from "../models/CommentModel";

export const getComments = async(req, res)=>{
    const CommentData = await Comment.find();
    res.status(200).json(CommentData)

}

export const postComments = async(req, res)=>{

    try{
        const Commentdata = new Comment(req.body);
        await Commentdata.save();

        res.status(200).json(Commentdata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdateComment =async (req, res) => {
    try{
        const Commentdata = await Comment.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json(Commentdata)

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
        res.status(200).json(Commentdata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getCommentByPostID =async (req, res) => {
    const CommentData = await Comment.find({PostID:req.params.PostID});
    res.status(200).json(CommentData)
}

export const getCommentCountByPost =async (req, res) => {
    const CommentData = await Comment.find({PostID:req.params.PostID}).count();
    res.status(200).json(CommentData)
}