/**
 * Tablebooking.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    time :{
    type:'number',
    required : true,
    },
     guest :{
      type :'number',
      min:2,
      max :6,
      required: true
     },
     order_status :{
      type :'string',
      isIn :['pending','cancelled'],
      defaultTo :'pending'
     },
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
  CheckDate: async function(attribute){
    let newDate = Date.parse(attribute)
    let currentDate = new Date().getTime()
    let mesg
    if(isNaN(newDate)){
     return mesg= 'date is invalid'
    }else{
      if(newDate < currentDate){
       mesg = 'date should not be past date'
      }else{
        mesg = 'date is correct'
      }
    }
    let data = {
      date : newDate,
      mesg : mesg
    }
    return data
  },


};

