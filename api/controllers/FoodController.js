/**
 * FoodController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const uuid = require('uuid-random');
module.exports = {
  AddFood : async(req,res)=>{
    const id = uuid()
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const {category , foodName , price} = req.body
    const findFood = await Food.findOne({foodName:foodName})
    if(findFood){
      res.status(401).json({message : 'Already exist'})
    }else{
        const addFood = await Food.create({
            id :id ,
            admin_user:findUser.name,
            category:category,
            foodName : foodName,
            price :price
        }).fetch()
        res.status(200).json({message: 'Food added',foods:addFood})
    }
    
  },

  EditFood : async(req,res)=>{
     const {oldfoodName , updatefoodName} = req.body
     const findFood = await Food.findOne({foodName : oldfoodName,isDeleted:false})
     if(!findFood){
        res.status(404).json({message : 'Food not found'})
    }else{
        const findfood = await Food.findOne({foodName:updatefoodName,isDeleted:false})
        if(findfood){
            res.status(403).json({message : 'FoodName already exists'})
        }else{
            const updateFood = await Food.updateOne({foodName:oldfoodName,isDeleted:false})
            .set({foodName:updatefoodName,updatedAt :Date.now()})
            res.status(200).json({
                message : 'FoodName updated',
                Food : updateFood
            })
        }
        
    }
  },

  DeleteFood : async(req,res)=>{
    const {FoodName} = req.body
    const findfood = await Food.findOne({foodName:FoodName,isDeleted:false})
    if(!findfood){
        res.status(404).json({message : 'foodName not found'})
    }else{
        const deletCategory = await Food.updateOne({foodName:FoodName,isDeleted:false}).set({isDeleted:true ,deletedAt : Date.now()})
        res.status(200).json({message : 'deleted successfully'})
    }
  },
  ListFoodByCatId : async(req,res)=>{
    const {id} = req.params
    
    const category = await Category.find(id,{isDeleted:false}).populate('food')
    res.status(200).json({
     categoryId :id,
     
     total:category[0].food.length,
     food:category[0].food})
}

};

