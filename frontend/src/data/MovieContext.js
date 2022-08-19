import {createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    return (
        <MovieContext.Provider
            value={{

            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}