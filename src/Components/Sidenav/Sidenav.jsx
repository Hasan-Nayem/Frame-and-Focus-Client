import { Link } from 'react-router-dom';
import './Sidenav.css';
const Sidenav = () => {
    return (
        <div className="sidenav">
            <ul>

                {/* Student Links */}

                <li className='my-3'><h3>Welcome Student  </h3></li>
                <li className='my-3'>Logged In As <span className="badge bg-info">Student</span></li>
                <li className='my-3'><Link to='/dashboard' className="link">Dashboard</Link></li>
                <li className='my-3'><Link className="link">My Selected Classes</Link></li>
                <li className='my-3'><Link className="link">My Enrolled Classes</Link></li>
                <li className='my-3'><Link className="link">Payments History</Link></li>

                {/* Instructors Links */}

                <li className='my-3'><h3>Welcome Instructor </h3></li>
                <li className='my-3'>Logged In As <span className="badge bg-warning">Instructor</span></li>
                <li className='my-3'><Link to='/dashboard' className="link">Dashboard</Link></li>
                <li className='my-3'><Link className="link">My Classes</Link></li>
                <li className='my-3'><Link className="link">Create A New class</Link></li>

                {/* Admin Links */}

                <li className='my-3'><h3>Welcome Admin </h3></li>
                <li className='my-3'>Logged In As <span className="badge bg-success">Admin</span></li>
                <li className='my-3'><Link to='/dashboard' className="link">Dashboard</Link></li>
                <li className='my-3'><Link className="link">Manage Users</Link></li>
                <li className='my-3'><Link className="link">Manage Classes</Link></li>

            </ul>
        </div>
    );
};

export default Sidenav;