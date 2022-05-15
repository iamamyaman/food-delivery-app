import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebaseConfig";
  
 
  // getall food items
  export const getAllFoodItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    console.log(items);
    return items.docs.map((doc) => doc.data());
  };