import { Link } from 'react-router-dom';
import './Sidenav.css';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import Loader from '../Loader/Loader';
const Sidenav = () => {
    const {role, user} = useContext(AuthContext);
    console.log("sidenav role ",role);
    return (
        <div className="sidenav">
            <ul>


                {
                    // Student role 1
                    role === 1?
                    <>
                        <li className='my-3'><h5>Welcome {user.displayName}  </h5></li>
                        <li className='my-3'>Logged In As <span className="badge bg-info">Student</span></li>
                        <li className='my-3'><Link to='/dashboard' className="link">Dashboard</Link></li>
                        <li className='my-3'><Link className="link">My Selected Classes</Link></li>
                        <li className='my-3'><Link className="link">My Enrolled Classes</Link></li>
                        <li className='my-3'><Link className="link">Payments History</Link></li>
                    </>
                    // instructor role 2
                    : role === 2?
                    <>
                        <li className='my-3'><h3>Welcome Instructor </h3></li>
                        <li className='my-3'>Logged In As <span className="badge bg-warning">Instructor</span></li>
                        <li className='my-3'><Link to='/dashboard' className="link">Dashboard</Link></li>
                        <li className='my-3'><Link className="link">My Classes</Link></li>
                        <li className='my-3'><Link className="link">Create A New class</Link></li>
                    </>
                    // Admin role 0
                    : role === 0?
                    <>
                        <li className='my-3'><h3>Welcome Admin </h3></li>
                        <li className='my-3'>Logged In As <span className="badge bg-success">Admin</span></li>
                        <li className='my-3'><Link to='/dashboard' className="link">Dashboard</Link></li>
                        <li className='my-3'><Link className="link">Manage Users</Link></li>
                        <li className='my-3'><Link className="link">Manage Classes</Link></li>
                    </> : <Loader></Loader>
                }                 
            </ul>
        </div>
    );
};

export default Sidenav;