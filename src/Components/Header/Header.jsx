import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Brand Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0 fw-bolder"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Classes</Nav.Link>
                        <Nav.Link href="#action2">Instructors</Nav.Link>
                        <Nav.Link href="#action2">Dashboard</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 fw-bolder"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Link className="btn mx-3" style={{ color: '#96BB7C', fontWeight: "bolder"}}>Login</Link>
                        <Link className="join-btn mx-3">Join With Us <i className="fa-solid fa-arrow-right ms-2"></i> </Link>
                    </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;