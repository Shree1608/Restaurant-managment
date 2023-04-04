/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuid = require('uuid-random');




module.exports = {
  
    Do_Order : async(req,res)=>{
        const id = uuid()
        const user = req.userData.UorAid
        const {address,zipcode,city} = req.body
        const userDetails =await User.findOne({id:user})
        console.log(userDetails);
        const orderfind = await Order.findOne({id:id})
        if(orderfind){
            res.status(401).json({message :'want to order again ??'})
        }
        const DoOrder = await Order.create({
            id:id,
            name:userDetails.name,
            email : userDetails.email,
            mobileNo : userDetails.mobileNo,
            address:address,
            zipcode:zipcode,
            city:city,
            
        }).fetch()
        const findOrder = await Cartproduct.find({isDeleted:false})
        console.log(findOrder);
        const totalpriceofCart = await Cartproduct.sum('total',{where:{isDeleted:false}})
        res.status(200).json({
            message :'Continiue',
            total_products : findOrder.length,
            totalamount :totalpriceofCart,
            Billing_Details :DoOrder ,
            Products : findOrder,
        })
        
        
        
        
    },

    delete_order : async(req,res)=>{
        const { id } = req.params
        const findId = await Order.findOne({id:id,isDeleted:false})
        if(findId){
            const deleteOrder = await Order.updateOne({id:id,isDeleted:false}).set({isDeleted:true,deletedAt:Date.now()})
            res.status(200).json({message : 'delete successfully',deleted_order :deleteOrder})
        }else{
            res.status(404).json({message:'order not found'})
        }
    }

};

