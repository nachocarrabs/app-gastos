import { createContext, useContext, useReducer } from "react";

export const Context = createContext()

export const useGlobalState = () =>{ //hook para traer los datos del context y no tener que andar importando 
    const context = useContext(Context)
    return context;
}

const GlobalProvider = ({children}) =>{

    const [state, setState] = useReducer( , [])

    return(
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}