import './Login.css';
import logo from '../../../src/assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signInWithGoogleAuthProvider} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const submitForm = () => {
        
    }
    const handleGoogleLogin = () => {
        signInWithGoogleAuthProvider()
        .then(() => {
            navigate(from, {replace : true});
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={logo} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="title text-center my-4 fw-bolder fs-1">Welcome Back</h1>
                    <form onSubmit={handleSubmit(submitForm)} className="form-control">
                        <div className="form-group my-2">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" {...register("email", { required: true })} className="form-control" />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Your Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group my-1">
                            <button className='form-control login-btn '>Login</button>
                        </div>
                    </form>
                    <div className="row text-center my-4">
                        <div className="col-lg-4"> <hr /> </div>
                        <div className="col-lg-4">OR</div>
                        <div className="col-lg-4"> <hr /> </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-2">
                        <div className="google-btn" onClick={handleGoogleLogin}>
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p className="btn-text" style={{fontSize: "12px"}}><b>Sign in with google</b></p>
                        </div>
                        {/* <button className="loginBtn loginBtn--facebook">
                            Login with Facebook
                        </button> */}
                    </div>
                    <small>Still not registered!!! Click <Link to='/registration'>Here</Link> to register now</small>
                </div>
            </div>
        </div>
    );
};

export default Login;