import React from 'react'

const ConfirmationForm = ({formData}) => {
    return (
        <div>
             <h2 className="stepper-confirmation-header">Thank you for your purchase {formData.firstName}!</h2>
        </div>
    )
}

export default ConfirmationForm
