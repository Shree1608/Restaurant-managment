/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  UserController:{
    logout : 'tokenverify',
   
  },
  CategoryController : {
    AddCategory : 'isAdmin',
    EditCategory :'isAdmin',
    DeleteCategory :'isAdmin',  
  },
  FoodController : {
    AddFood :'isAdmin',
    EditFood :'isAdmin',
    DeleteFood : 'isAdmin',
  },
  CartproductController : {
    AddToCart :'isUser',
    Editquantity:'isUser',
    DeleteCart:'isUser',
    ListCart:'isUser'
  },
  OrderController :{
    Do_Order:'isUser',
    delete_order :'isUser'
  },
  FavouriteController :{
    Add_to_favourite :'isUser',
    Remove_from_fav:'isUser',
    List_myFav:'isUser',
    Search_myfav:'isUser'
  },
  TablebookingController :{
    Book_Table : 'isUser',
    Cancle: 'isUser' ,
    listbooking :'isUser',
    listOne :'isUser',
    confirmBooking :'isAdmin'
  }


};
