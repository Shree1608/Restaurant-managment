/**
 * FavouriteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const uuid = require('uuid-random');

module.exports = {
  Add_to_favourite : async(req,res)=>{
    const id = uuid()
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const {foods ,date} = req.body
    const food = await Food.findOne({id : foods,isDeleted:false})
    const fav = await Favourite.findOne({id:id,isDeleted:false})
    if(fav){
        res.status(403).json({message :'already added'})
    }else{
        const newDate = await Favourite.CheckDate(date)
        console.log(newDate.mesg);
        if(newDate.mesg == 'date is correct'){
            const addTofav = await Favourite.create({
                id :id,
                user :findUser.name,
                foods:food.foodName,
                date:date,
                price :food.price
            }).fetch()
            res.status(200).json({
                message : 'Added Successfully.',
                Favourites : addTofav
            })       
        }else{
          if(newDate.mesg == 'this date is not todays date'){
            res.status(400).json({message : 'this date is not todays date'})
          }
        }
    }
  },

  Remove_from_fav : async(req,res)=>{
    const {id} = req.params 
    const findfav = await Favourite.findOne({id:id,isDeleted:false})
    if(!findfav){
      res.status(404).json({message :'it is not in favourites'})
    }
    else{
        const removefav = await Favourite.updateOne({id:id,isDeleted:false}).set({isDeleted:true,deletedAt :Date.now()})
        res.status(200).json({message :'Deleted Successfully.',deleted_from_fav : removefav})
    }
  },

  List_myFav : async(req,res)=>{
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const favourites = await Favourite.find({isDeleted : false})
    res.status(200).json({
        user :findUser.name,
        Favourites :favourites
    })
  },

  Search_myfav: async(req,res)=>{
    const findmyFav = await Favourite.find({
        foods:{
            'like':'%' + req.param('foodName') + '%'
        }
    })
    res.status(200).json({message :'search',search :findmyFav})
  }
};

