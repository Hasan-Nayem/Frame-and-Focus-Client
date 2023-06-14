import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import useUsers from "../../../hooks/useUsers";
import './Users.css';
import { Helmet } from "react-helmet";
const Users = () => {
    const [users, refetch, isLoading] = useUsers();
    // console.log(users, "Loading state - " , isLoading);
    if(isLoading) {
        return <Loader></Loader>
    }
    const handleMakeAdmin = (user) => {
        console.log(user.email, "Make him Admin");
        // /role/:email
        const role = {
            role : 0
        };
        fetch(`https://frame-and-focus.vercel.app/role/${user.email}`,{
            method: 'PUT',
            headers: { 
                'Content-Type' : 'application/json',
                'authorization':  localStorage.getItem('phero-assignment-token')
            },
            body: JSON.stringify(role)
        })
        .then(response => response.json())
        .then(data => { 
            if(data.modifiedCount === 1){
                refetch();
                Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Admin Access Given',
                showConfirmButton: false,
                timer: 1500
                })
            }
         })
    }
    const handleMakeInstructor = (user) => {
        console.log(user.email, "Make him instructor")
        // /role/:email
        const role = {
            role : 2
        };
        fetch(`https://frame-and-focus.vercel.app/role/${user.email}`,{
            method: 'PUT',
            headers: { 
                'Content-Type' : 'application/json',
                'authorization':  localStorage.getItem('phero-assignment-token')
            },
            body: JSON.stringify(role)
        })
        .then(response => response.json())
        .then(data => {
            if(data.modifiedCount === 1){
                refetch();
                Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Instructor Access Given',
                showConfirmButton: false,
                timer: 1500
                })
            }
        })
    }
    return (
        <div className="">
            <Helmet>
                <title> Admin | Manage Users</title>
            </Helmet>
            <h1 className="my-5 text-center fw-bolder">User Management </h1>
            <table className="table table-striped text-center">
                <thead className="" style={{fontWeight: "800"}}>
                    <th>Sl</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        users.map((user , index) =>
                                <tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 0 && <span className="badge bg-success">Admin</span> }
                                        {user.role === 1 && <span className="badge bg-primary">Student</span> }
                                        {user.role === 2 && <span className="badge bg-warning">Instructor</span>}
                                    </td>
                                    <td>
                                        <button onClick={()=>{handleMakeAdmin(user)}} className="btn btn-danger mx-1 text-white">Make Admin</button>
                                        <button onClick={()=>{handleMakeInstructor(user)}} className="btn btn-warning mx-1 text-white">Make Instructor</button>
                                    </td>
                                </tr>
                            )
                    }                    
                </tbody>
            </table>
        </div>
    );
};

export default Users;