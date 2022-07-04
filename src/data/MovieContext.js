import {createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [text, setText] = useState('');
    console.log(text)
    return (
        <MovieContext.Provider
            value={{
                text,
                setText,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}