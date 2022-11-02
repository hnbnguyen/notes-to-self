import  { createContext, useReducer } from 'react';

export const itemContext = createContext() 

export const itemReducer = (state, action) => {
    // 11:55
} 

export const itemContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(itemReducer, {
        item: null
    })

    dispatch({
        type: 'SET_ITEMS',
        payload: [{}, {}]
    })
    
    return (
        <itemContext.Provider >
            { children }
        </itemContext.Provider>
    )
}