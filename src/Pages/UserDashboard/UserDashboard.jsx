import useRole from '../../hooks/useRole';
import './UserDashboard.css'
import InstructorDashboard from '../../Components/InstructorDashboard/InstructorDashboard';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
const UserDashboard = () => {
    const userRole = useRole();
    console.log(userRole);
    
    if(userRole === 0){
        return <>
            <AdminDashboard></AdminDashboard>
        </>
    }
    if(userRole === 1){
        return <>
            <div className="my-5 text-center"> <h1 className="fs-1 fw-bolder">Student Dashboard</h1> </div>
            
        </>
    }
    if(userRole === 2){
        
        return <>
            <InstructorDashboard></InstructorDashboard>
        </>
    }
};

export default UserDashboard;