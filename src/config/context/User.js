import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            let response = 
            await fetch('https://jsonplaceholder.typicode.com/users/2', {
                method: 'GET',
            })
            .then(res => res.json())
            .catch(err => console.log('error: ', err));

            setLoading(false);
            setUser(response);   
        } catch (error) {
            console.log('errorCatch: ', error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    // console.log(user);

    return (
        <UserContext.Provider value={{user, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};