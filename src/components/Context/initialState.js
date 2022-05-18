import React,{ useState } from "react";
import { fetchCartItems, fetchUser } from "../../utils/fetchLocalStorageData";

 const userInfo = fetchUser();
 const cartInfo = fetchCartItems();

 const initialState = {
    user:userInfo,
    foodItems:null,
    showCart:false,
    cartItems:cartInfo,
}

export default initialState;