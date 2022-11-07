import  { createContext, useReducer } from 'react';

//
export const itemsContext = createContext() 

export const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                items : action.payload
            }
        case 'CREATE_ITEM':
            return {
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
} 

export const itemsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(itemsReducer, {
        items: null
    })
    
    return (
        <itemsContext.Provider value={{...state, dispatch}}>
            { children } 
        </itemsContext.Provider>
    )
}