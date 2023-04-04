/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const CartproductController = require("../api/controllers/CartproductController");
const CategoryController = require("../api/controllers/CategoryController");
const FavouriteController = require("../api/controllers/FavouriteController");
const FoodController = require("../api/controllers/FoodController");
const OrderController = require("../api/controllers/OrderController");
const TablebookingController = require("../api/controllers/TablebookingController");





module.exports.routes = {
 
// User Controller
    'POST /user/signup' : 'UserController.userSignup',
    'POST /login' : 'UserController.login',
    'POST /logout' : 'UserController.logout',

//Category Controller
    'POST /admin/add' : 'CategoryController.AddCategory',
    'PATCH /admin/edit' : 'CategoryController.EditCategory',
    'DELETE /admin/delete' : 'CategoryController.DeleteCategory',
    'GET /category/list' : 'CategoryController.ListCategory',
    

//Food Controller
    'POST /admin/food/add': 'FoodController.AddFood',
    'PATCH /admin/food/edit':'FoodController.EditFood',
    'DELETE /admin/food/delete': 'FoodController.DeleteFood',
    'GET /food/list/:id' :'FoodController.ListFoodByCatId',

//Cart Controller 
    'POST /cart/add':'CartproductController.AddToCart',
    'PATCH /cart/edit' :'CartproductController.Editquantity',
    'DELETE /cart/delete/:id' : 'CartproductController.DeleteCart',
    'GET /cart/list': 'CartproductController.ListCart',

//Order Controller
    'POST /order/add' : 'OrderController.Do_Order',
    'DELETE /order/delete/:id' : 'OrderController.delete_order',

//Favourite Controller
    'POST /fav/add' :'FavouriteController.Add_to_favourite',
    'DELETE /fav/remove/:id' :'FavouriteController.Remove_from_fav',
    'GET /fav/list' :  'FavouriteController.List_myFav',
    'GET /fav/:foodName' :'FavouriteController.Search_myfav',

//Table Booking Contoller
    'POST /booking' : 'TablebookingController.Book_Table',
    'PATCH /cancle' : 'TablebookingController.Cancle' ,
    'GET /list' : 'TablebookingController.listbooking',
    'GET /listone/:id' : 'TablebookingController.listOne',
    'PATCH /confirm' : 'TablebookingController.confirmBooking'
};
