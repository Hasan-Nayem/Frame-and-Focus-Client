import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import useUsers from "../../../hooks/useUsers";
import './Users.css';

const Users = () => {
    const [users, refetch, isLoading] = useUsers();
    // console.log(users, "Loading state - " , isLoading);
    if(isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="">
            <h1 className="my-5 text-center">User Management</h1>
            <table className="table table-success text-center">
                <thead style={{fontWeight: "800"}}>
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
                                        <button onClick={handleMakeAdmin} className="btn btn-danger mx-1 text-white">Make Admin</button>
                                        <button onClick={handleMakeInstructor} className="btn btn-warning mx-1 text-white">Make Instructor</button>
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