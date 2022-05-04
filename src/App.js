import React from "react";
import { Route,Routes } from "react-router-dom";
import { Header,MainContainer,AdminContainer } from "./components/index";


const App =()=>{
    return(
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header/>
          <main className="mt-24 w-full p-8">
          <Routes>
            <Route path="/*" element={<MainContainer/>} />
            <Route path="/admin" element={<AdminContainer/>}/>
          </Routes>
          </main>
        </div>

    )
}

export default App;