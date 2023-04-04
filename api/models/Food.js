/**
 * Food.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// await sails.helpers.images(…, …);

// // With named parameters:
// await sails.helpers.images.with({
//   someInput: …,
//   someOtherInput: …
// });
module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    admin_user : {
      type:'string'
     },
    foodName : {
      type :'string',
      required : true
    },
    price : {
      type: 'number',
      required : true,
      columnType: 'FLOAT'
    },
    updatedAt:{
      type: 'string',
      defaultsTo : 'not updated.'
     },
     deletedAt : {
      type:'string',
      defaultsTo : 'not deleted'
     },
     isDeleted : {
      type :'boolean',
      defaultsTo: false
     },
    


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    category : {
     model :  'category'
      
   },
   
  },

};

