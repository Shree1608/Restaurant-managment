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
    ListCategory :'isAdmin',
    ListCategory :'isUser',

    
  },
  FoodController : {
    AddFood :'isAdmin',
    EditFood :'isAdmin',
    DeleteFood : 'isAdmin',
    ListFoodByCatId :'isAdmin',
    ListFoodByCatId : 'isUser'
  },
  CartproductController : {
    // AddToCart :'isAdmin',
    AddToCart :'isUser',
    // Editquantity :'isAdmin',
    Editquantity:'isUser',
    // DeleteCart:'isAdmin',
    DeleteCart:'isUser',
    // ListCart:'isAdmin',
    ListCart:'isUser'
  },
  OrderController :{
    // Do_Order :'isAdmin',
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
    Book_Table : 'isUser'
  }


};
