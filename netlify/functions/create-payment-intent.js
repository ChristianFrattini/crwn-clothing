//payment intent function for stripe

require('dotenv').config();

const stripe= require("stripe")("sk_test_51NjIfCH2z6mEntjBufEQt0RF7p8yS8XO6xjeUBO0Mftr8CFWMtyDZaS1IMRjCiUbii3pTsKv9elbUsixqbpEtXfJ00fKPjykVF")

exports.handler=async(event)=>{
    try{
        const {amount}=JSON.parse(event.body)

        const paymentIntent= await stripe.paymentIntents.create({
            amount,
            currency: "gbp",
            payment_method_types: ["card"]
        })

        return{
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
        }
    }catch(error){
        console.log({error})
        return{
            status: 400,
            body: JSON.stringify({error})
        }
    }
}