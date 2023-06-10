import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <Loader/>;
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;