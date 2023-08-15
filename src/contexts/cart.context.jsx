import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";  //use effect is deployed to detect the change of state of Cart items and update the final quantity

const addCartItem =(cartItems, productToAdd)=>{


    const existingCartItem=cartItems.find((cartItem)=> cartItem.id==productToAdd.id //if the cartitem id matches with the product to add id this fnction will return true
    );  
    //alert('trigger 1')
    //console.log(cartItems);
    if(existingCartItem){  //if the ids match then the quantity will be increased by 1 if not itll return the cartitem object
        return cartItems.map((cartItem)=>cartItem.id==productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
        );
        
    }
    //alert('trigger 2');
    //console.log(cartItems, productToAdd);
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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartCount:0,
    cartTotal: 0
})

export const CartProvider=({children})=>{
    const[isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems, setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);

    useEffect(()=>{ //use  effect used for the cart count (number of products)
        const newCartCount=cartItems.reduce((total, cartItem)=> total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems]) //this method is run every time something changes in the cartItems array

    useEffect(()=>{ //use effect for total price
        const newCartTotal=cartItems.reduce((total, cartItem)=> total + cartItem.quantity*cartItem.price, 0)
        setCartTotal(newCartTotal)
    },[cartItems]) //this method is run every time something changes in the cartItems array

    const addItemToCart=(productToAdd)=>{ // function that gets triggered every time the user clicks on add to cart
        //console.log(productToAdd)
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart=(cartItemToRemove)=>{ // function that gets triggered every time the user clicks on add to cart
        //console.log(productToAdd)
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart=(cartItemToClear)=>{ // function that gets triggered every time the user clicks on add to cart
        //console.log(productToAdd)
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value={isCartOpen,setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}