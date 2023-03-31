/**
 * TablebookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuid = require('uuid-random');
const Tablebooking = require('../models/Tablebooking');
module.exports = {

    Book_Table:async(req,res)=>{
        const orderNumber = uuid();
        const{ date,time,guest} = req.body
        const newDate = await Tablebooking.CheckDate(date)
        if(newDate.mesg == 'date is correct'){
            if(time.match(/(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)(pm)/)){
                const book_table = await Tablebooking.create({
                    orderNumber:orderNumber ,
                    date:date,
                    time :time,
                    guest:guest,
                }).fetch()
                res.status({messge : 'We have Received your Reservation, We will confirm it in 1 - 2 Hours '})
            }else{
                res.status(500).json({messge: 'Restaurant closed'})
            }
        }
    }
};

