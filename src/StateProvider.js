import {createContext, useContext, useReducer} from 'react';

/*Prepares the data layer*/
export const StateContext= createContext();

/*wrap our app and provide the data layer*/
export const StateProvider = ({initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//pull information from the data layer
export const useStateValue= () => useContext(StateContext);