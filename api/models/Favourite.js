/**
 * Favourite.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    foods :{
      model :'food'
    },
    user :{
      type:'string'
    },
    price:{
      type:'number',
      columnType : 'FLOAT',
      required : true
    },
    date :{
      type :'ref',
    },
    deletedAt : {
      type:'string',
      defaultsTo : 'not deleted'
     },
     isDeleted : {
      type :'boolean',
      defaultsTo: false
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
    let currentDate = Date.parse(new Date().toLocaleDateString())
    let mesg
    if(isNaN(newDate)){
     return mesg= 'date is invalid'
    }
      if(newDate == currentDate){
        mesg = 'date is correct'
    }else{
    mesg = 'this date is not todays date'
    
    }
    // if(newDate < currentDate){
    //    mesg = 'date should not be future date or past date'
    // }
    // if( newDate > currentDate){
    //   mesg = 'date should not be future date or past date'
    // }
    
        
      
    
    let data = {
      date : newDate,
      mesg : mesg
    }
    return data
  },

};

