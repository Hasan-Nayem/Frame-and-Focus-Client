import { Link, useLocation, useNavigate } from "react-router-dom";
import './Register.css'
import logo from '../../../src/assets/images/reg.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signUpWithGoogle, signInWithGoogleAuthProvider} = useContext(AuthContext);
    const handleSignUp = ({name, email, password, confirmPass, img}) => {
        //user Data for database
         const dbData = {
            name: name,
            email: email,
            role: 1
         }               
        console.log(dbData);
        if(password != confirmPass){
            return toast.error("Password and Confirm password do not match");
        }
        //google signin with email password
        signUpWithGoogle(email, password).
        then(response =>  {
            const loggedUser = response.user;
            //updating display name and imageURL
            updateProfile(loggedUser,{
                displayName: name,
                photoURL: img,
            })
            .then(() => {
                //save user data to database
                fetch('http://localhost:3000/user',{
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dbData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })   
                navigate(from, {replace : true});            
            })
            .catch(err => toast.error(err));

        })
        .catch(err => toast.error(err));
    }
    const handleGoogleLogin = () => {
        signInWithGoogleAuthProvider()
        .then((result) => {
            //save user data to database
            const dbData = {
                name: result.user.displayName,
                email: result.user.email,
                role: 1
             }
            fetch('http://localhost:3000/user',{
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dbData)
            })
            .then(response => response.json())
            .then(data => {
                console.log( 'from login page',data);
            })

            navigate(from, {replace : true});
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container register-container">
            <ToastContainer />
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={logo} alt="" className="img-fluid reg-logo" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="text-center fw-bolder mb-4">Register to <span style={{ color:"#fa0000"}}>Hub</span></h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="form-control">
                        <div className="form-group my-2">
                            <label htmlFor="name">Your Name</label>
                            <input type="name" {...register("name", {required: true})} className="form-control" />
                            {errors.name?.type === 'required' && <p className="my-1 text-danger">Name is required</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" {...register("email", {required: true})} className="form-control" />
                            {errors.email?.type === 'required' && <p className="my-1 text-danger">Email is required</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Your Password</label>
                            <input type="password" {...register("password", {required: true, pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{6,})/ })} className="form-control" />
                            {errors.password?.type === 'required' && <p className="my-1 text-danger">Password is required</p>}
                            {errors.password?.type === 'pattern' && <p className="my-1 text-danger">Password must contain at least 6 characters, one capital letter and one special character.</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Confirm Password</label>
                            <input type="password" name ="confirmPass"{...register("confirmPass", {required: true })} className="form-control" />
                            {errors.confirmPass?.type === 'required' && <p className="my-1 text-danger">Confirm Password field is required</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="image">Profile Photo</label>
                            <input type="text" {...register("img")} name="img" className="form-control" />
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
                        <div onClick={handleGoogleLogin} className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p className="btn-text" style={{fontSize: "12px"}}><b>Sign in with google</b></p>
                        </div>
                    </div>
                    <small className="">Already registered!!! Click <Link to='/login'>Here</Link> to Login now</small>
                </div>
            </div>
        </div>
    );
};

export default Registration;