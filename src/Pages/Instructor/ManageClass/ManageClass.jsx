import useClass from '../../../hooks/useClass';
import './ManageClass.css'
import { Helmet } from "react-helmet";
const ManageClass = () => {
    const [allClass, , isLoading] = useClass();
    return (
        <div className="ManageClass">
            <Helmet>
                <title> Instructor | Manage Classes</title>
            </Helmet>
            <h1 className="text-center my-5 fw-bolder">All Classes</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Banner</th>
                        <th>Title</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isLoading && allClass.map((myClass, index)=><tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ myClass.image[2] ? 
                                <img src={myClass.image[2]} style={{ width: "50px", borderRadius : "6px" }} alt="" />
                            : "Image not Uploaded" }</td>
                            <td>{ myClass.title }</td>
                            <td>{ myClass.seat }</td>
                            <td>{ myClass.price }/=</td>
                            <td>
                                { myClass.status == 'pending' && <span className="badge bg-warning">Pending</span> }
                                { myClass.status == 'approved' && <span className="badge bg-success">Approved</span> }
                                { myClass.status == 'denied' && <span className="badge bg-danger">Denied</span> }
                            </td>
                            <td>
                                
                                {
                                    myClass.feedback? myClass.feedback : <p className='overflow-scroll-auto'>No feedback yet</p>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;