import { AnimatePresence } from "framer-motion";
import React,{useEffect} from "react";
import { Route,Routes } from "react-router-dom";
import { useStateValue } from "./components/Context/StateProvider";
import { Header,MainContainer,AdminContainer } from "./components/index";
import { getAllFoodItems } from "./utils/firebaseFunction";


const App =()=>{
  const[{foodItems},dispatch] = useStateValue();

  const fetchFoodItems = async()=>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type:"SET_FOOD_ITEMS",
        foodItems:data,
      });
    });
  };

  useEffect(() => {
    fetchFoodItems()
  }, []);

    return(
        <AnimatePresence exitBeforeEnter>
        <div className="w-screen min-h-screen flex flex-col bg-primary">
          <Header/>
          <main className="mt-16 w-full px-6 md:px-20 py-6 md:py-0">
          <Routes>
            <Route path="/*" element={<MainContainer/>} />
            <Route path="/admin" element={<AdminContainer/>}/>
          </Routes>
          </main>
        </div>
        </AnimatePresence>

    )
}

export default App;