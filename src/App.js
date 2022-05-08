import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route,Routes } from "react-router-dom";
import { Header,MainContainer,AdminContainer } from "./components/index";


const App =()=>{
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