import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";


const PaymentForm=()=>{

    const stripe = useStripe();
    const elements= useElements()

    const paymentHandler= async(e)=>{
        e.preventDefault();
        
        if(!stripe || !elements){ //if there is no stripe or elements instances, exit
            return;
        }

        const response= await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: 10000})
        }).then(res=>res.json())

        const {paymentIntent: {client_secret}}=response

        //console.log(client_secret)

        const paymentResult=await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Christian Frattini'
                }
            }
        })

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
                    <Button buttonType='google'>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm