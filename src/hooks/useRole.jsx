import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useRole = () => {
    //for all page
    const {user} = useContext(AuthContext);
    const [role, SetRole] = useState(null);
    useEffect(()=>{
        fetch(`https://frame-and-focus.vercel.app/user/${user?.email}`)
        .then(response => response.json())
        .then(data => SetRole(data.role));
        
    },[user?.email]);
    return role;    
};

export default useRole;