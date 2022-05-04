import React, { createContext ,useContext,useReducer} from "react"


const StateContext = createContext();

export const StateProvider =({reducer,initialState,children})=>{
    return(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
}
export default StateProvider;
export const useStateValue = ()=> {return useContext(StateContext)};