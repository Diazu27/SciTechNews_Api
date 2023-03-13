import { Like } from "../models/LikeModel";


export const getLikes = async(req, res)=>{
    const LikeData = await Like.find();
    res.status(200).json(LikeData)

}

export const postLikes = async(req, res)=>{

    try{
        const Likedata = new Like(req.body);
        await Likedata.save();

        res.status(200).json(Likedata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdateLike =async (req, res) => {
    try{
        const Likedata = await Like.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json(Likedata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getLikeById =async (req, res) => {
    const LikeData = await Like.findById(req.params.id);
    res.status(200).json(LikeData)
}


export const DeleteLike = async (req, res) => {
    try{
        const Likedata = await Like.deleteOne({_id: req.params.id})
        res.status(200).json(Likedata)

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getLikeCountByPostID =async (req, res) => {
    const LikeData = await Like.find({PostID:req.params.PostID}).count();
    res.status(200).json(LikeData)
}


export const getUserLike =async (req, res) => {
    const LikeData = await Like.find({UserID:req.body.UserID, PostID:req.body.PostID}).count();
    if(LikeData>0) {res.status(200).json({isLiked:true})} else res.status(200).json({isLiked:false});
}
