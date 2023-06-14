import { Helmet } from "react-helmet";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const SelectedClass = () => {
    const [bookedClass, refetch, isLoading] = useSelectedClass();
    const {user} = useContext(AuthContext);
    console.log("Selected Class", bookedClass._id);
    const handleDelete = (data) => {
        console.log("Deleting - ", data);
        Swal.fire({
            title: 'Are you sure to remove?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://frame-and-focus.vercel.app/selected/${user.email}?courseId=${data.courseId}`,{
                    method: 'DELETE',
                    headers : {
                        authorization : localStorage.getItem('phero-assignment-token')
                    }
                })
                .then(response=>response.json())
                .then(data => {
                    console.log(data);
                    if(data.result.acknowledged){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your class has removed from list deleted.',
                            'success'
                          )
                    }
                });
            }
          })
        
    }
    return (
        <div className="my-5">
            <Helmet>
                <title>Student | Selected Class</title>
            </Helmet>
            <h1 className="my-5 fw-bolder fs-2 text-center">Selected Class List</h1>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Title</th>
                        <th>Course Instructor</th>
                        <th>Course Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isLoading && bookedClass.map((myClass, index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{myClass.courseTitle}</td>
                            <td>{myClass.courseName}</td>
                            
                            <td>{myClass.price}</td>
                            <td>
                                <Link to={`/dashboard/pay/${myClass._id}`} className="btn btn-warning text-white mx-2">Pay now</Link>
                                <button onClick={()=>{handleDelete(myClass)}} className="btn btn-danger text-white mx-2">Remove from selected</button>
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;