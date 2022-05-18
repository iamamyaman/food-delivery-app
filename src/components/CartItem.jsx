import React,{useState,useEffect} from "react";
import {BsPlusCircleFill} from "react-icons/bs";
import {AiFillMinusCircle} from "react-icons/ai"
import { useStateValue } from "./Context/StateProvider";
let items =[];

const CartItem = ({data,flag,setFlag})=>{
    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(1);
  
  
    const cartDispatch = () => {
      dispatch({
        type: 'SET_CARTITEMS',
        cartItems: items,
      });
      localStorage.setItem("cartItems", JSON.stringify(items));
    };
  
    const updateQty = (action, id) => {
      if (action == "add") {
        setQty(qty + 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty += 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      } else {
        // initial state value is one so you need to check if 1 then remove it
        if (qty == 1) {
          items = cartItems.filter((item) => item.id !== id);
          setFlag(flag + 1);
          cartDispatch();
        } else {
          setQty(qty - 1);
          cartItems.map((item) => {
            if (item.id === id) {
              item.qty -= 1;
            }
          });
          setFlag(flag + 1);
          cartDispatch();
        }
      }
    };

    useEffect(() => {
        items = cartItems;
        console.log(items);
      }, [qty, cartItems]);

  
    useEffect(() => {
      items = cartItems;
    }, [qty, items]);

    return(
        <div className="w-full px-2 py-1 flex justify-between bg-gray-200 rounded-lg shadow-sm">
            <div className="flex gap-2 items-center">
                <img src={data.imageURL} className="h-14"></img>
                <div className="flex flex-col text-xs text-gray-700">
                    <p>{data.title}</p>
                    <p className="font-semibold">{qty * data.price}$</p>
                </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
               <AiFillMinusCircle onClick={()=>updateQty("remove",data.id)}/>
               <p>{qty}</p>
               <BsPlusCircleFill onClick={()=>updateQty("add",data.id)}/>
            </div>
        </div>
    )
}

export default CartItem;