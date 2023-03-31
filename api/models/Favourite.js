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
    let currentDate = new Date().getTime()
    let mesg
    if(isNaN(newDate)){
     return mesg= 'date is invalid'
    }else{
      if(newDate > currentDate){
       mesg = 'date should not be future date'
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

