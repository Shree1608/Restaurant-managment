/**
 * CartproductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const uuid = require('uuid-random');



module.exports = {
  AddToCart : async(req,res)=>{
    const id = uuid()
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const { products} = req.body
    const findCart = await Cartproduct.findOne({ food :products,isDeleted:false})
    if(findCart){
      res.status(200).json({message :'Already added'})
    }else{
      const food = await Food.findOne({id : products})
      console.log(food);
      const addToCart = await Cartproduct.create({
        user : findUser.name,
        id :id ,
        food :products,
        price : food.price,
        total : food.price 
    }).fetch()
    res.status(200).json({
        message :'food added into cart',
        addToCart:addToCart
      })
    }
    
   },

   Editquantity : async(req,res)=>{
     const {cartId,quantity} = req.body 
     const cartproduct = await Cartproduct.findOne({id :cartId,isDeleted:false})
      const newprice = cartproduct.price * quantity
      const Quantity = await Cartproduct.updateOne({id :cartId,isDeleted:false},{quantity:quantity,total:newprice  })
      console.log(Quantity);
      res.status(200).json({message : 'updated',Quantity:Quantity})
     
   },

   DeleteCart : async(req,res)=>{
    const {id} = req.params 
    const findCart = await Cartproduct.findOne({id:id,isDeleted:false})
    if(!findCart){
      res.status(404).json({message :'cart not found'})
    }else{
      const deletecart = await Cartproduct.updateOne({id:id ,isDeleted : false}).set({isDeleted:true,deletedAt : Date.now()})
      res.status(200).json({deletecart :deletecart})
    }
   },

   ListCart : async(req,res)=>{
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const findCart = await Cartproduct.find({isDeleted:false})
    const totalpriceofCart = await Cartproduct.sum('total',{where:{isDeleted:false}})
    res.status(200).json({
      user :findUser.name,
      Total_Cart:findCart.length,
      totalPrice:totalpriceofCart,
      findCart:findCart
    })
   }
    


};

