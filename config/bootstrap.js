/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const bcrypt = require('bcrypt');
const uuid = require('uuid-random');
const jwt = require('jsonwebtoken');
 const dotenv = require("dotenv").config();
module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  
  const {roles} = sails.config.constant;
  const user = await User.findOne({roles : roles.Admin})
  const hash = await bcrypt.hash('shree1810@#',10)
  const id = uuid()

  if(!user){
    await User.createEach([
      {id :id ,name:'Bhagyashree chauhan',email:'bhagyashree8220@gmail.com',password:hash,mobileNo :9978140934,address:'bhavnagar',roles:roles.Admin}
     ]);
  }
   
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

};
