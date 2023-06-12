import useUsers from '../../../hooks/useUsers';
import './AdminDashboard.css'
import ClassCard from './ClassCard';
const AdminDashboard = () => {
    const [users, , isLoading] = useUsers();
    let admin = 0;
    let student = 0;
    let instructor = 0;
    if(!isLoading){
        users.forEach(element => {
            if(element.role === 0){
                admin = admin + 1;
            }
            if(element.role === 1){
                student = student + 1;
            }
            if(element.role === 2){
                instructor = instructor + 1;
            }
        });
    }
    return (
        <div className="my-5 text-center"> 
            <h1 className="fs-1 fw-bolder">Admin Dashboard</h1> 
            <div className="row mt-5 text-center">
                <div className="col-lg-3 col-sm-12 mx-2 mt-4" style={{backgroundColor: "#badc58", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Admin : {admin} </h4>
                </div>
                <div className="col-lg-3 col-sm-12 mx-2 mt-4" style={{backgroundColor: "#7ed6df", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Student : {student} </h4>
                </div>
                <div className="col-lg-3 col-sm-12 mx-2 mt-4" style={{backgroundColor: "#f0932b", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Instructor : {instructor} </h4>
                </div>
            </div>
            <ClassCard></ClassCard>
        </div>
    );
};

export default AdminDashboard;