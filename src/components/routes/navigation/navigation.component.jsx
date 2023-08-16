import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.context"
import { CartContext } from "../../../contexts/cart.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import {NavigationContainer, LogoContainer, NavLink, NavLinks} from './navigation.styles.jsx'


const Navigation =()=>{

    const {currentUser}=useContext(UserContext);

    const {isCartOpen}=useContext(CartContext);
    

    return(
      <Fragment>
          <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
              <NavLinks>
                <NavLink to='shop'>
                    SHOP
                </NavLink>
                {
                    currentUser?(   //when there is a current user then render a sign out link, if not SIGN in
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) :(<NavLink className="nav-link" to='auth'>
                        SIGN IN
                    </NavLink>)
                }
                <CartIcon/>
              </NavLinks>
              {isCartOpen && <CartDropdown/>}
          </NavigationContainer>
          <Outlet/>
      </Fragment>
    )
  }

  export default Navigation