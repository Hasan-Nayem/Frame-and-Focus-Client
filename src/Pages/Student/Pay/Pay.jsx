import { useLoaderData } from "react-router-dom";
import Checkout from "./checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe('pk_test_51NFfGbC8F0C8zF12HkDb1D4j1rh4Mzr38GmhV9024j163XEJ3gLdmB7vxcVBRv4YWUnRn9r2BhSjwaX7AR0qN7Of00tqE2xC8X');
const Pay = () => {
    const loaderData = useLoaderData();
    console.log("Loaderdata - ", loaderData)
    const total = parseFloat(loaderData.price.toFixed(2));
    console.log("Converted to float - ", total)
    return (
        <div className="container my-5">
            <ul style={{listStyle: 'none'}}>
                <li className="my-2"><h4 className="fw-bolder">{loaderData.courseTitle}</h4> By {loaderData.courseName}</li>
                <li className="my-2"><h4 className="fw-bolder">Price : {loaderData.price}/= </h4></li>

                {/* <li className="my-2"><h4 className="fw-bolder"> <button style={{ 
                    backgroundColor : "#625AFA",
                    color : "#fff",
                    padding : "15px 30px",
                    border : "none",
                    borderRadius : "6px",
                    }}>Pay Now</button> </h4></li> */}

            </ul>   
            <Elements stripe={stripePromise}>
                <Checkout 
                    price={total} 
                    courseId={loaderData.courseId}
                    userId={loaderData.userId}
                    courseTitle={loaderData.courseTitle}
                    instructor={loaderData.courseName}
                    userName={loaderData.name}
                    userEmail={loaderData.email}
                ></Checkout>
            </Elements>      
        </div>
    );
};

export default Pay;