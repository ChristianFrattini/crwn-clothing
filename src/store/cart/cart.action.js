import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem =(cartItems, productToAdd)=>{


    const existingCartItem=cartItems.find((cartItem)=> cartItem.id==productToAdd.id //if the cartitem id matches with the product to add id this fnction will return true
    );  
    if(existingCartItem){  //if the ids match then the quantity will be increased by 1 if not itll return the cartitem object
        return cartItems.map((cartItem)=>cartItem.id==productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
        );
        
    }
    //in case the ids didnt match a new array is returned with the quantity of 1
    return [...cartItems, {...productToAdd, quantity: 1}] //if a new product is added to the cart then run this line. add the product details including quantity of 1
    
}

const removeCartItem=(cartItems, cartItemToRemove)=>{

    const existingCartItem=cartItems.find((cartItem)=> cartItem.id==cartItemToRemove.id //if the cartitem id matches with the product to remove id this fnction will return true
    );  

    if(existingCartItem.quantity==1){
        return cartItems.filter(cartItem=>cartItem.id != cartItemToRemove.id) //if the value of the cartitem and cartitemtoremove are the same then the item is deleted
    }

    return cartItems.map((cartItem)=>cartItem.id==cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem)
}

const clearCartItem=(cartItems, cartItemToClear)=>{  //function the removes the item through the X button in the checkout page
    return cartItems.filter(cartItem=>cartItem.id != cartItemToClear.id) //if the value of the cartitem and cartitemtoremove are the same then the item is deleted
}







export const setIsCartOpen=(boolean)=> createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

export const addItemToCart=(cartItems,productToAdd)=>{ // function that gets triggered every time the user clicks on add to cart
    const newCartItems=addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{ // function that gets triggered every time the user clicks on add to cart
    const newCartItems=removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart=(cartItems, cartItemToClear)=>{ // function that gets triggered every time the user clicks on add to cart
    const newCartItems=clearCartItem(cartItems, cartItemToClear);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}