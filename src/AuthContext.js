import React, { useState ,createContext } from 'react';

export const UserContext = createContext();


export const UserProvider = (props) => {
    const [ user, setUser ] = useState({
        name: "",
        id: "",
        isAuth: false
    });

    return(
        <UserContext.Provider value = {[user, setUser]} >
            {props.children}
        </ UserContext.Provider>
    );
}