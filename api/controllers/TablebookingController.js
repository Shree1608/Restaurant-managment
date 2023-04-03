/**
 * TablebookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuid = require('uuid-random');
const moment = require('moment');
// const Tablebooking = require('../models/Tablebooking');
// const Tablebooking = require('../models/Tablebook/ing');
module.exports = {

    // Book_Table:async(req,res)=>{
    //     const id = uuid();
    //     const{ date ,time ,guest} = req.body
    //     const BookingDateAndTime = await Tablebooking.bookingDateAndTime(date,time)
    //     console.log(BookingDateAndTime);
      
    //     if(BookingDateAndTime.msg == 'date and time is current'){
    //         const book_table = await Tablebooking.create({
    //             id:id ,
    //             date : date,
    //             time :time,
    //             guest:guest,
                
    //         }).fetch()

    //         res.status(200).json({messge : 'We have Received your Reservation, We will confirm it in 1 - 2 Hours '  ,book_table:book_table})
    //     }else{
    //         res.status(400).json({mes :"date invalid"})
    //     }
                           
               
    // },

  Book_Table : async (req,res)=>{
    const id = uuid() ;
    const {guest} = req.body
   
    const bookingDate = moment(req.body.bookingDate)
    
    const currentDateandTime = new Date().getTime()
    if(bookingDate < currentDateandTime){
        return res.status(400).json({
            message :'date should not be past date'
        })
    }else{
        if(bookingDate.day() === 0 || bookingDate.day() ===3){
            return res.status(400).json({
                message : 'restaurant is closed on sundays and wednesday'
            })
        }else{
            if(bookingDate.day()===1 && bookingDate.hours() < 9 || bookingDate.hours() >= 21){
                return res.status(400).json({
                    message :'restauant closed at'
                })
            }else{
                if(bookingDate.day()===2 && bookingDate.hours()< 9|| bookingDate.hours() >= 18){
                    return res.status(400).json({
                        message :'restauant closed now'
                    })
                }else{
                    if(bookingDate.day()===4 && bookingDate.hours()< 9|| bookingDate.hours() >= 20){
                        return res.status(400).json({
                            message :'restauant closed in this'
                        })
                   }else{
                      if(bookingDate.day()===5 && bookingDate.hours()< 10|| bookingDate.hours() >= 22){
                        return res.status(400).json({
                            message :'restauant closed !!'
                        })
                       }else {
                            const book_table = await Tablebooking.create({
                                            id:id ,
                                            bookingDate:moment().parseZone(bookingDate),
                                            guest:guest,
                                            
                                        }).fetch()
                                        console.log(book_table);
                            
                                        res.status(200).json({messge : 'We have Received your Reservation, We will confirm it in 1 - 2 Hours '  ,book_table:book_table})
                           }
                       }
                     }
                }
            }
        }
       
    }
  }

       
;






















// const currentDate = new Date().getTime()
        //     let bookingDate = await moment(req.body.bookingDate); // format = 2016-07-18 09:00:00
        //     if(bookingDate < currentDate){
        //         return res.status(400).json({
        //             message :'date should not be past date'
        //         })
        //         }else{
        //         if(bookingDate.day() === 0 || bookingDate.day() ===3){
        //             return res.status(400).json({
        //                 message : 'restaurant is closed on sundays and wednesday'
        //             })
        //         } else{
        //             if(bookingDate.day()=== 1 && bookingDate.hours() < 9 || bookingDate.hours() > 21){
        //                 return res.status(400).json({
        //                     message :'restaurant is closed at this time'
        //                 })
        //             }else{
        //                 if(bookingDate.day()=== 2 && bookingDate.hours() <9 || bookingDate.hours() >18){
        //                     res.status(400).json({
        //                         message :'restaurant is closed before 9 am and after 6pm '
        //                     })
        //                 }else{


         // BookingDate : async(req,res)=>{
        //     const currentDate = new Date().getTime()
        //     const bookingDate = await moment(req.body.bookingDate); // format = 2016-07-18 09:00:00
        //     if(bookingDate < currentDate){
        //         return res.status(400).json({
        //             message :'date should not be past date'
        //         })
        //     }else{
        //         if(bookingDate.day() === 0 || bookingDate.day() ===3){
        //             return res.status(400).json({
        //                 message : 'restaurant is closed on sundays and wednesday'
        //             })
        //         }else if(bookingDate.day()===1 && bookingDate.hours() < 9 || bookingDate.hours() >= 21){
        //             return res.status(400).json({
        //                 message :'restauant closed'
        //             })
        //         }else if(bookingDate.day()===2 && bookingDate.hours()< 9|| bookingDate.hours() >= 18){
        //             return res.status(400).json({
        //                 message :'restauant closed'
        //             })
        //         }else if(bookingDate.day()===4 && bookingDate.hours()< 9|| bookingDate.hours() >= 20){
        //             return res.status(400).json({
        //                 message :'restauant closed'
        //             })
        //        }else if(bookingDate.day()===5 && bookingDate.hours()< 10|| bookingDate.hours() >= 22){
        //         return res.status(400).json({
        //             message :'restauant closed'
        //         })
        //        }else if(bookingDate.day()===6 && bookingDate.hours()< 9,22|| bookingDate.hours() >= 22,22){
        //         return res.status(400).json({
        //             message :'restauant closed'
        //         })
        //        }
        //     }
            
        // }
        // const book_table = await Tablebooking.create({
        //     orderNumber:orderNumber ,
        //     bookingDate:bookingDate,
        //     guest:guest,
            
        // }).fetch()
        // res.status({messge : 'We have Received your Reservation, We will confirm it in 1 - 2 Hours '})
    