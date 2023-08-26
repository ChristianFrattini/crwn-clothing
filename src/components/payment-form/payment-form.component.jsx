import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
import { useState } from "react";  //used to define whether theres a loading stating for pending payments
import { useSelector } from "react-redux";  //for value amount & name
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";


const PaymentForm=()=>{

    const stripe = useStripe();
    const elements= useElements();
    const amount=useSelector(selectCartTotal)
    const currentUser=useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment]=useState(false) //use state to warn theuser about a processing payment. if its true the button is disabled

    const paymentHandler= async(e)=>{
        e.preventDefault();
        
        if(!stripe || !elements){ //if there is no stripe or elements instances, exit
            return;
        }

        setIsProcessingPayment(true)//set paymentprocessing to true (payment process starts). button disabled

        const response= await fetch('/.netlify/functions/create-payment-intent', {   //payment intent
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount*100})  //stripe uses cents therefore *100
        }).then(res=>res.json())

        const {paymentIntent: {client_secret}}=response

        //console.log(client_secret)

        const paymentResult=await stripe.confirmCardPayment(client_secret, {  //payment result
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'guest'
                }
            }
        })

        setIsProcessingPayment(false) //payment processing finished. button enabled again

        if(paymentResult.error){
            //alert(paymentResult.error)
            alert('Payment Unsuccessful. Retry. (VisaTest 4242424242424242 03/27 424 24242)')
        }else{
            if(paymentResult.paymentIntent.status=='succeeded'){
                alert('Payment Successful')
            }
        }
    }
    
    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment Form</h2>
                    <CardElement/>
                    <Button isLoading={isProcessingPayment} buttonType='payment'>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm