import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.context"
import { CartContext } from "../../../contexts/cart.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import './navigation.styles.scss'


const Navigation =()=>{

    const {currentUser}=useContext(UserContext);

    const {isCartOpen}=useContext(CartContext);
    

    //const signOutHandler=async()=>{
        //await signOutUser();
        //console.log(res);
        //setCurrentUser(null);
        //alert('Successfully Signed Out')
    //}

    return(
      <Fragment>
          <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className='logo'/>
            </Link>
              <div className="nav-links-container">
                <Link className="nav-link" to='shop'>
                    SHOP
                </Link>
                {
                    currentUser?(   //when there is a current user then render a sign out link, if not SIGN in
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) :(<Link className="nav-link" to='auth'>
                        SIGN IN
                    </Link>)
                }
                <CartIcon/>
              </div>
              {isCartOpen && <CartDropdown/>}
          </div>
          <Outlet/>
      </Fragment>
    )
  }

  export default Navigation