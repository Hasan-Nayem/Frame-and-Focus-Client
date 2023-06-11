import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useRole = () => {
    const {user} = useContext(AuthContext);
    const [role, SetRole] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/user/${user.email}`)
        .then(response => response.json())
        .then(data => SetRole(data.role));
        
    },[user.email]);
    return role;    
};

export default useRole;