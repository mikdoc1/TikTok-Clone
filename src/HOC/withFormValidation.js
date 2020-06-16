import React from 'react';


const withFormValidation = (WrappedComponent) => {
    return (props) => {
        const validator = (action, input) => {
            switch(action) {
                case 'phone_val':
                    return phoneValidation(input)
            }
        }

        const phoneValidation = (input) => {
            if(!isNaN(Number(input)) && input !== '') {
                return input
            }
            return input
        }

        return (
            <WrappedComponent   validator={validator}
                                {...props}/>
        )
    }
}

export default withFormValidation;