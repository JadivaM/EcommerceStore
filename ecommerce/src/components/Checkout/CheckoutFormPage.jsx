import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import StepLabel from '@material-ui/core/StepLabel';
import ShippingInformationForm from '../Checkout/ShippingInformationForm';
import PaymentDetailsForm from '../Checkout/PaymentDetailsForm';


const CheckoutFormPage = ({cartItem, order, handleCheckout, setCartItem, setCartTotal}) => {
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



    const getSteps = () => {
        return ['Shipping information', 'Payment Details'];
      }

      function getStepContent(step) {
        switch (step) {
          case 0:
            return (<ShippingInformationForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} />);
          case 1:
            return (<PaymentDetailsForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} handleCheckout={handleCheckout} />);
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
            {getStepContent(activeStep)}<div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext} type="submit">
              {activeStep === steps.length - 1 ? `Pay ${checkoutToken.live.subtotal.formatted_with_symbol}` : "Next" }
            </Button>
        </div>
        </div>
      </div>
    </div>
    )
}

export default CheckoutFormPage