// import { Navigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import useRole from "../hooks/useRole";

const AdminRoutes = ({children}) => {
    const userRole = useRole();
    const navigation = useNavigation();
    console.log("Status - ", userRole, " Loading Status ", navigation.state);
    

    return children;

    // return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoutes;