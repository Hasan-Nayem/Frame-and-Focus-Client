import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Checkout = (props) => {
    const navigate = useNavigate();
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    console.log("from checkout card", props)
    const [cardError, SetError] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);

    const [clientSecret, SetClientSecret] = useState("");
    const [processing, SetProcessing] = useState(false);
    const [transection, SetTransection] = useState('');

    const paymentAmount = {
        price : props.price
    }

    useEffect(() =>{

            fetch('http://localhost:3000/create-payment-intent',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'authorization' : localStorage.getItem('phero-assignment-token')
                },
                body : JSON.stringify(paymentAmount)
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data.clientSecret);
                SetClientSecret(data.clientSecret);
            })

    },[]);
    console.log('secret from payment intent - ', clientSecret)

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!elements || !stripe){
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }


        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        console.log("card - ", card)

        if(error){
            console.log("error - " ,error);
            SetError(error.message);
        }else{
            SetError("");
            console.log("Payment Method - ",paymentMethod);
        }
        SetProcessing(true);
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method : {
                    card: card,
                    billing_details : {
                        name: user?.displayName || "Unknown",
                        email: user?.email || "Anonymous"
                    },
                }
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        console.log("Payment intent - ", paymentIntent);
        SetProcessing(false);
        
        if(paymentIntent.status === "succeeded"){
            const transactionId = paymentIntent.id;
            SetTransection(transactionId);
            const storePaymentInfo = {
                userName : props.userName,
                email : props.userEmail,
                userId : props.userId,
                courseId : props.courseId,
                instructor : props.instructor,
                courseTitle : props.courseTitle,
                transactionId : transactionId,
                createdAt : timestamp
            }
            console.log("Store To database - ",storePaymentInfo);

            fetch('http://localhost:3000/save-payment',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'authorization' : localStorage.getItem('phero-assignment-token')
                },
                body : JSON.stringify(storePaymentInfo)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Done!!!',
                    text: 'Payment Successful!',
                })
                navigate('/classes')
            })

            
            
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-control">
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '24px',
                        color: '#000000',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button type="submit" className="btn btn-primary px-5 my-4" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-danger my-3">{cardError}</p>
            }
        </>
    );
};

export default Checkout;