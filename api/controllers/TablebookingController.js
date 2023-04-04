/**
 * TablebookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuid = require('uuid-random');
const moment = require('moment');




module.exports = {



  Book_Table : async (req,res)=>{
    const id = uuid() ;
    const {guest} = req.body
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const currentDateandTime = new Date().getTime()
    const bookingDate = await moment(req.body.bookingDate) 
    if(bookingDate < currentDateandTime){
        return res.status(400).json({
            message :'date should not be past date'
        })
    }
        if(bookingDate.day() === 0 || bookingDate.day() ===3){
            return res.status(400).json({
                message : 'restaurant is closed on sundays and wednesday'
            })
        }
            if(bookingDate.day()===1 && bookingDate.hours() < 9 || bookingDate.hours() >= 21){
                return res.status(400).json({
                    message :'restauant closed now'
                })
            }
                if(bookingDate.day()===2 && bookingDate.hours()< 9|| bookingDate.hours() >= 18){
                    return res.status(400).json({
                        message :'restauant closed now'
                    })
                }
                    if(bookingDate.day()===4 && bookingDate.hours()< 9|| bookingDate.hours() >= 20){
                        return res.status(400).json({
                            message :'restauant closed now'
                        })
                   }
                      if(bookingDate.day()===5 && bookingDate.hours()< 10|| bookingDate.hours() >= 22){
                        return res.status(400).json({
                            message :'restauant closed !!'
                        })
                       }else {
                        console.log(bookingDate);
                        let bookingDate2 = String(bookingDate)
                            const book_table = await Tablebooking.create({
                                            id:id ,
                                            user :findUser.name,
                                            bookingDate:bookingDate2,
                                            guest:guest,
                                            
                                        }).fetch()
                                        console.log(book_table);
                                     res.status(200).json({messge : 'We have Received your Reservation, We will confirm it in 1 - 2 Hours '  ,book_table:book_table})
                           }
                       
                     
                
            
        
       
    },

  Cancle : async(req,res) =>{
    const {id} = req.body
    const cancleOrder = await Tablebooking.updateOne({id :id},{order_status:'cancelled'})
    if(cancleOrder){
        res.status(200).json({message:'order cancle' ,Order : cancleOrder})
    }else{
        res.status(400).json({message :'you already cancled'})
    }
  
  },

  listbooking : async (req,res)=>{
    const user = req.userData.UorAid
    const findUser = await User.findOne({id:user})
    const booking = await Tablebooking.find({})
    res.status(200).json({ user :findUser.name,All_bookings :booking})
  } ,
  listOne :async(req,res)=>{
    const id = req.params
    const booking = await Tablebooking.findOne(id)
    res.status(200).json({Booking :booking})
  }
  }

       
;






















    