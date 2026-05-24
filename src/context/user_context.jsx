import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:5000/my_acount/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWhtZWQiLCJpYXQiOjE3Nzk2MzEzNjIsImV4cCI6MTc4MDIzNjE2Mn0.14MKURuegHbtXQrw2FCjMLHU54rOn0D1AEoO-3aD1HM")
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