import { useState } from "react";
import { fetchUser } from "../../utils/fetchLocalStorageData";
import { getAllFoodItems } from "../../utils/firebaseFunction";

 const userInfo = fetchUser();

 
 const initialState = {
    user:userInfo,
    foodItems:null,
}

export default initialState;