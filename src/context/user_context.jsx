import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [token, setToken] = useState();
    // const [token] = useCookies(["auth"]);
    
    useEffect(() => {
        const date = new Date("2026-09-17T17:24:30.632Z");
        console.log(date.toLocaleString("en-US"));
        // if (!token.auth) return;
        fetch(`http://localhost:5000/my_acount`,{
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            loading
        }}>
            {children}
        </UserContext.Provider>
    );
}