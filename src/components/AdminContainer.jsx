import React,{useState} from "react";
import { categories } from "../utils/data";
import {IoFastFoodSharp,IoCloudUpload} from "react-icons/io5"
import Loader from "./Loader";
import {MdFoodBank,MdDeleteForever} from "react-icons/md"
import {AiOutlineDollar} from "react-icons/ai"

const AdminContainer =()=>{
  const[title,setTitle] = useState();
  const[category,setCategory] = useState();
  const[field,setField]  = useState(false);
  const[alert,setAlert] = useState("danger");
  const[msg,setMsg] = useState();
  const[isloading,setIsLoading] = useState(false);
  const [imageAsset,setImageAsset] = useState(null);
  const[calories,setCalories] = useState();
  const[price,setPrice] = useState();
  
  const uploadImage = ()=>{
  }

  const deleteImage =()=>{}

  const saveDetails = ()=>{}
  
    return(
        <div className="w-full h-auto flex justify-center items-center mt-6 md:mt-12">
          <div className="w-[95%] md:w-[70%] shadow-lg p-4 rounded-2xl flex flex-col gap-2 justify-center items-center bg-white">
            {field &&
             <p className={`w-full flex justify-center items-center text-white font-semibold ${alert==="danger" ? "bg-red-500":"bg-green-400"} p-2 rounded-md`}>
               {msg}
              </p>
            }
            <div className="w-full py-2 flex gap-3 items-center border-b">
              <IoFastFoodSharp className="text-gray-700 text-2xl"/>
              <input 
                type="text" required
                value={title}
                placeholder="Title goes here.." 
                className="w-full bg-transparent outline-none placeholder:text-gray-400"
                onChange = {(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="w-full border-b py-2">
              <select 
                onClick={(e)=>setCategory(e.target.value)}
                className="bg-transparent outline-none w-full border-2 py-1 px-3 rounded-md"
                >
                  <option value="other" className="outline-none border-0 text-base text-headingColor capitalize">Select Category</option>
                {categories && categories.map(item=>(
                  <option 
                    key={item.id} 
                    value={item.urlParamName} 
                    className="outline-none border-none text-base text-headingColor capitalize bg-white"
                     >
                       {item.name}
                  </option>
                )
                )}
              </select>
            </div>

            <div className="flex-col gap-2 lg:flex w-full border-b py-2">
              <div className="flex items-center gap-2 w-full flex-1">
                <MdFoodBank className="text-3xl text-gray-700"/>
                <input 
                  type="text" 
                  placeholder="Calories" 
                  value={calories}
                  className="w-full outline-none p-2 bg-transparent border-2 rounded-md"
                  onChange = {(e)=>setCalories(e.target.value)}
                >
                </input>
              </div>
              <div className="flex items-center gap-2 w-full flex-1 mt-1">
                <AiOutlineDollar className="text-3xl text-gray-700"/>
                <input 
                  type="text" 
                  placeholder="Price" 
                  value={price}
                  className="w-full outline-none p-2 bg-transparent border-2 rounded-md"
                  onChange = {(e)=>setPrice(e.target.value)}
                >
                </input>
              </div>
            </div>

            <div className="w-full h-300 border-2 flex justify-center items-center">
              {isloading 
              ? <Loader/> 
              : <>
                  {
                    !imageAsset 
                      ? (
                       <label className="flex flex-col items-center gap-2 cursor-pointer">
                         <div className="flex flex-col items-center gap-2 ">
                            <IoCloudUpload className="text-4xl text-gray-700"/>
                            <p>Click here to Upload</p>
                         </div>
                         <input type ="file" name="uploadImage" accept="image/*" className="w-0 h-0" onChange={uploadImage}></input>
                       </label> 
                      )
                      :
                      (
                      <div className="relative w-full h-full">
                        <img src={imageAsset} className="w-full h-full object-cover"/>
                        <button 
                          type="button"
                          onClick={deleteImage}
                          className="absolute outline-none top-2 right-3 bg-red-500 p-1 md:p-2 text-sm md:text-xl text-white rounded-md hover:shadow-lg hover:scale-110 flex gap-2 items-center transition-all ease-in-out duration-500"
                          >
                          <MdDeleteForever/>
                          
                        </button>
                      </div>
                      )
                  }
                </>
              }
               
            </div>
            <div className="w-full py-2">
              <button 
                className="w-full bg-green-400 text-white font-semibold py-2 rounded-md"
                onClick={saveDetails}
                >
                  SAVE
              </button>
            </div>
            
          </div>
        </div>
    )
}

export default AdminContainer;