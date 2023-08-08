import './form-input.styles.scss'

const FormInput=({label, ...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>
            {label && ( // if label exists then render. otherpropsvaluelength--> if the input has any content then shrink the label if not do nothing
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
              
        </div>
    )
}

export default FormInput;