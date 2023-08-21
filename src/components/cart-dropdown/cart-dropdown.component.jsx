import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts (deprecated)/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';   //navigation method
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown=()=>{

    //const {cartItems}=useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const navigate =useNavigate();

    const goToCheckoutHandler=()=>{  //navigate to checkout
        navigate('/checkout')
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'> 
                {cartItems.map((item)=>(<CartItem key={item.id} cartItem={item}/>))}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;