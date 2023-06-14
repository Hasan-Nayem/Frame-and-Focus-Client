import { Link, useLocation } from 'react-router-dom';
import './ClassesCard.css'
import useRole from '../../hooks/useRole';
import {  useContext, useState } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
const ClassesCard = (props) => {
    const location = useLocation();   
    const role = useRole();
    const {user} = useContext(AuthContext);
    
    const handleSelect = () => {
        
         if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Looks like you haven\'t logged in yet! Please login to select this class.',
                footer: '<a href="/login">Login now!</a>'
              })
         }else if(role === 0){
            toast.error("Only Student Can Select Class")
            console.log("Admin");
         }else if(role === 2){
            toast.error("Only Student Can Select Class")
            console.log("Instructor");
         }else if(role === 1){
            // toast.success("Class Selected, Visit Your Dashboard for Payment")
            // console.log("Student");
            const selectData = {
                userId : user.uid,
                name : user?.displayName,
                email : user?.email,
                courseId : props.id,
                courseName : props.name,
                courseTitle : props.title,
                price: parseFloat(props.price),
                availableSeat : props.seat
            }
            // console.log(selectData)
            fetch(`http://localhost:3000/selectClass`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('phero-assignment-token')
                },
                body: JSON.stringify(selectData)
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data.result.acknowledged);
                if(data.result.acknowledged){
                    toast.success("Class Selected, Visit Your Dashboard for Payment");
                    props.refetch();
                }
                
            })
         }
         

    }
    return (
        // <div className="row mb-3 p-4 rounded" style={{border: '3px solid #E74040'}}>
        <div className="row mb-1 p-2 rounded">
            <ToastContainer />
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={props.image} className="img-fluid img-thumbnail" style={{width:"45rem"}} alt="" />
                        </div>
                        <div className="col-lg-8" >
                            <h2 className="my-3 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i> {props.name} </h2>
                            <h5 className="my-3"> <i className="fa-solid fa-camera mx-3"></i> {props.title}</h5>
                            <p className="my-2 mx-3"><span className="fw-bolder">Details : </span>Lorem ipsum dolor sit samet consectetur adipisicing elit. Distinctio quod repellendus dolorum eos quae. Ipsum officia quae, quod commodi adipisci rerum doloribus, omnis nisi architecto, rem sed ipsam labore veniam?
                            Corrupti ad aspernatur quidem impedit. </p>
                            <div className="d-flex my-2">
                                <p className="mx-3"><span className="fw-bolder">$ : </span> {props.price} /-</p>
                                <p>Available Seats : {props.seat} </p>
                            </div> 
                            {
                                location.pathname === '/' ?
                                <Link to='/classes' className="mx-3 select-btn my-2">Go To Classes</Link>: 
                                <> 
                                    <Link onClick={handleSelect} className="mx-3 select-btn my-2">Select This Class</Link>
                                    {/* <Link className="mx-3 select-btn my-2">Selected<i className="fa-solid fa-circle-check ms-2"></i></Link> */}
                                </>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;