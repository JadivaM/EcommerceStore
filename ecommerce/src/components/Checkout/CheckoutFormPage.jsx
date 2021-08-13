import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ShippingInformationForm from '../Checkout/ShippingInformationForm';
import PaymentDetailsForm from '../Checkout/PaymentDetailsForm';
import ConfirmationForm from '../Checkout/ConfirmationForm';


const CheckoutFormPage = ({cartItem, handleCheckout}) => {
    const [formData, setFormData] = useState([]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
  
    useEffect(() => {
        if (cartItem?.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cartItem.id, { type: 'cart' });
              setCheckoutToken(token);
            } catch(err) {
                console.log(err);
            }
          };
    
          generateToken();
        }
      }, [cartItem]);

      let Confirmation = () => (
          <h2>Thank you for your purchase {formData.firstName}!</h2>);

    const getSteps = () => {
        return ['Shipping information', 'Payment Details', 'Confirmation'];
      }

      function getStepContent(step) {
        switch (step) {
          case 0:
            return (<ShippingInformationForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} handleNext={handleNext} handleBack={handleBack}/>);
          case 1:
            return (<PaymentDetailsForm checkoutToken={checkoutToken} formData={formData} handleCheckout={handleCheckout} handleNext={handleNext} handleBack={handleBack} />);
            case 2:
            return (<ConfirmationForm formData={formData}/>);
          default:
            return (<ShippingInformationForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} />);
        }
      }

      
    const steps = getSteps();  

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="checkout-stepper-container">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
            <Step key={label}>
            <StepLabel>{label}</StepLabel>
            </Step>
            ))}
          </Stepper>
        <div>
        <div className="checkout-step">
        {activeStep === steps.length ? <Confirmation /> 
        : getStepContent(activeStep)
        }
        <div>
        </div>
        </div>
      </div>
    </div>
    )
}

export default CheckoutFormPage