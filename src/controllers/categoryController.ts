import { Category } from "../models/CategoryModel";

export const getCategories = async(req, res)=>{
    const CategoryData = await Category.find();
    res.status(200).json(CategoryData)

}

export const postCategories = async(req, res)=>{

    try{
        const Categorydata = new Category(req.body);
        await Categorydata.save();

        res.status(200).json({msg:"Successful",Categorydata})

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const UpdateCategory =async (req, res) => {
    try{
        const Categorydata = await Category.updateOne({_id: req.params.id}, {$set:req.body})
        res.status(200).json({msg:"Successful",Categorydata})

    }catch(error){
        res.status(400).json({error: error})
    }
}

export const getCategoryById =async (req, res) => {
    const CategoryData = await Category.findById(req.params.id);
    res.status(200).json(CategoryData)
}


export const DeleteCategory = async (req, res) => {
    try{
        const Categorydata = await Category.deleteOne({_id: req.params.id})
        res.status(200).json({msg:"Deleteed successful",Categorydata})

    }catch(error){
        res.status(400).json({error: error})
    }
}