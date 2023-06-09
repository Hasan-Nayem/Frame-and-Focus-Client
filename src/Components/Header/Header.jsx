import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import ActiveLinks from "../ActiveLinks/ActiveLinks";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () =>{
        logout()
        .then(() =>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logged Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err => {
            return toast.error(err);
        })
    }
    return (
        <div className="container my-3">
            <ToastContainer></ToastContainer>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Brand Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ps-5 mx-auto my-2 my-lg-0 fw-bolder"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <ActiveLinks to='/'>Home</ActiveLinks>
                        <ActiveLinks to='/classes'>Classes</ActiveLinks>
                        <ActiveLinks to='/instructors'>Instructors</ActiveLinks>
                        {
                            user && <ActiveLinks to={`/dashboard`}>Dashboard</ActiveLinks>
                        }
                    </Nav>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 fw-bolder"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        {/* <ActiveLinks to='/login' className="btn mx-3" style={{ color: '#96BB7C', fontWeight: "bolder"}}>Login</ActiveLinks> */}
                        {
                            user? 
                            <>
                                <img src={user.photoURL} style={{ width: "50px", borderRadius : "50%"}}alt="" />
                                <button onClick={handleLogout} className="btn mx-3" style={{ color: '#96BB7C', fontWeight: "bolder"}}>Logout</button>
                            </>:
                            <>
                                <Link to='/login' className="btn mx-3" style={{ color: '#96BB7C', fontWeight: "bolder"}}>Login</Link>
                                <Link to='/registration' className="join-btn mx-3">Join With Us <i className="fa-solid fa-arrow-right ms-2"></i> </Link>
                            </>
                        }
                        
                    </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;