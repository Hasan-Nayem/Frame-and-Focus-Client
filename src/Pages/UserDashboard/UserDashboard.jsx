import useRole from '../../hooks/useRole';
import './UserDashboard.css'
const UserDashboard = () => {
    const userRole = useRole();
    console.log(userRole);
    
    if(userRole === 0){
        return <>
            <div className="my-5 text-center"> <h1 className="fs-1 fw-bolder">Admin Dashboard</h1> </div>
            
        </>
    }
    if(userRole === 1){
        return <>
            <div className="my-5 text-center"> <h1 className="fs-1 fw-bolder">Student Dashboard</h1> </div>
            
        </>
    }
    if(userRole === 2){
        return <>
            <div className="my-5 text-center"> <h1 className="fs-1 fw-bolder">Instructor Dashboard</h1> </div>
            
        </>
    }
};

export default UserDashboard;