/**
 * Tablebooking.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const moment = require('moment');
module.exports = {

  attributes: {
    
     guest :{
      type :'number',
      min:2,
      max :6,
      required: true
     },
     order_status :{
      type :'string',
      isIn :['pending','cancelled','confirm'],
      defaultsTo :'pending'
     },
     bookingDate:{
      type:'ref',
      columnType:'date',
      required :true
     }
    //  date:{
    //   type :'string',
    //   required :true
    //  },time :{
    //   type:'string' ,
    //   required : true
    //  }
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
   

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },


  // bookingDateAndTime :  function(date ,time){
  //   const todayDate = new Date().getTime()
  //   const bookingDate = moment().parseZone(date,time) 
  //   let msg 
  //   if(bookingDate < todayDate){
  //     return msg ='date should not be past date'
  //   }else{
  //     return msq = 'date and time is current'
  //   }
  // }
  


};

