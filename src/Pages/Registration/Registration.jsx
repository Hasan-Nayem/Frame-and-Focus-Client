import { Link } from "react-router-dom";
import './Register.css'
import logo from '../../../src/assets/images/reg.png'

const Registration = () => {
    return (
        <div className="container register-container">
            
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={logo} alt="" className="img-fluid reg-logo" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="text-center fw-bolder mb-4">Register to <span style={{ color:"#fa0000"}}>Hub</span></h1>
                    <form className="form-control">
                        <div className="form-group my-2">
                            <label htmlFor="name">Your Name</label>
                            <input type="name" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Your Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="image">Profile Photo</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="image">Phone</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="image">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group my-1">
                            <button className='form-control login-btn '>Register</button>
                        </div>
                    </form>
                    <div className="row text-center my-4">
                        <div className="col-lg-4"> <hr /> </div>
                        <div className="col-lg-4">OR</div>
                        <div className="col-lg-4"> <hr /> </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-2">
                        <div onClick='' className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p className="btn-text" style={{fontSize: "12px"}}><b>Sign in with google</b></p>
                        </div>
                        <button className="loginBtn loginBtn--facebook">
                            Login with Facebook
                        </button>
                    </div>
                    <small className="">Already registered!!! Click <Link to='/login'>Here</Link> to Login now</small>
                </div>
            </div>
        </div>
    );
};

export default Registration;