import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../../contexts (deprecated)/cart.context'
import CheckoutItem from '../../checkout-item/checkout-item.component'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector'
import PaymentForm from '../../payment-form/payment-form.component'

const Checkout=()=>{
    //const {cartItems, cartTotal}=useContext(CartContext)
    const cartItems=useSelector(selectCartItems)
    const cartTotal=useSelector(selectCartTotal)


    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-blocks'>
                    <span>Product</span>
                </div>
                <div className='header-blocks'>
                    <span>Description</span>
                </div>
                <div className='header-blocks'>
                    <span>Quantity</span>
                </div>
                <div className='header-blocks'>
                    <span>Price</span>
                </div>
                <div className='header-blocks'>
                    <span>Remove</span>
                </div>
            </div>
            
            
                {
                    cartItems.map((cartItem)=>{
                        
                        return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    })
                }
            <span className='total'>Total: £{cartTotal}</span>
            <PaymentForm/>
        </div>
    )
}

export default Checkout