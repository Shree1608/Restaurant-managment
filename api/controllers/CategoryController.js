/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const uuid = require('uuid-random');





module.exports = {
  AddCategory : async(req,res)=>{
    const id = uuid()
    const user = req.userData.UorAid
    const findadminName = await User.findOne({id :user})
    const {categoryName} = req.body
    const {roles} = sails.config.constant
    const findCategory = await Category.findOne({categoryName :categoryName,isDeleted:false})
    if(findCategory){
        res.status(403).json({message : 'categoryName already exists'})
    }else{
                const addcategory = await Category.create({
                    id :id ,
                    AdminName : findadminName.name,
                    categoryName : categoryName,
                    roles : roles.Admin,

                }).fetch()
                res.status(200).json({
                    message : 'category added'
                }) 
    }  
  },

  EditCategory : async (req,res)=>{
    const {oldcatName , updatCatName} = req.body
    const findCategory = await Category.findOne({categoryName : oldcatName,isDeleted:false})
    if(!findCategory){
        res.status(404).json({message : 'category not found'})
    }else{
        const findupdatecatName = await Category.findOne({categoryName:updatCatName,isDeleted:false})
        if(findupdatecatName){
            res.status(403).json({message : 'categoryName already exists'})
        }else{
            const updateCategory = await Category.updateOne({categoryName:oldcatName,isDeleted:false})
            .set({categoryName:updatCatName,updatedAt :Date.now()})
            res.status(200).json({
                message : 'categoryName updated',
                Category : updateCategory
            })
        } 
    }
  },
  DeleteCategory : async(req,res)=>{
    const {categoryName} = req.body
    const findCategory = await Category.findOne({categoryName:categoryName,isDeleted:false})
    if(!findCategory){
        res.status(404).json({message : 'categoryName not found'})
    }else{
        const deleteCategory = await Category.updateOne({categoryName:categoryName,isDeleted:false},{isDeleted:true ,deletedAt : Date.now()})
        res.status(200).json({message : 'deleted successfully'})
    }
  },

  ListCategory : async(req,res)=>{ 
       const Admin = req.userData.UorAid
       const findAdmin = await User.findOne({id:Admin})
       const categories = await Category.find({isDeleted:false})
       res.status(200).json({
        categories:categories,
        AdminName : findAdmin.name          
    }) 
  }
 

};

