import './button.styles.scss'
import { ButtonSpinner } from '../spinner/spinner.styles'



const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted: 'inverted',
    payment: 'payment'
}


const Button =({children, buttonType, isLoading, ...otherProps})=>{
    return(
        
        <button disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </button>
        
    )
}

export default Button;