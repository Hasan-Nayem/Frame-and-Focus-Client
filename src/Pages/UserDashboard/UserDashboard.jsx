import useRole from '../../hooks/useRole';
import './UserDashboard.css'
import InstructorDashboard from '../../Components/InstructorDashboard/InstructorDashboard';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import StudentDashboard from '../Student/StudentDashboard/StudentDashboard';
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
            <StudentDashboard></StudentDashboard>
            
        </>
    }
    if(userRole === 2){
        
        return <>
            <InstructorDashboard></InstructorDashboard>
        </>
    }
};

export default UserDashboard;