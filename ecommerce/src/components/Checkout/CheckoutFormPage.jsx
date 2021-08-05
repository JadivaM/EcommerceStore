import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import StepLabel from '@material-ui/core/StepLabel';
import ShippingInformationForm from '../Checkout/ShippingInformationForm';
import PaymentDetailsForm from '../Checkout/PaymentDetailsForm';
import ReviewCheckoutInformation from '../Checkout/ReviewCheckoutInformation';


const CheckoutFormPage = ({cartItem, setCartItem, setCartTotal}) => {
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
      }, []);



    const getSteps = () => {
        return ['Shipping information'];
      }

      function getStepContent(step) {
        switch (step) {
          case 0:
            return (<ShippingInformationForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} />);
          // case 1:
          //   return (<PaymentDetailsForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} />);
          // case 1:
          //   return <ReviewCheckoutInformation checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} cartItem={cartItem} />;
          // default:
          //   return (<ShippingInformationForm checkoutToken={checkoutToken} setFormData={setFormData} formData={formData} />);
        }
      }

      
    const steps = getSteps();  
    const maxSteps = steps.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      commerce.cart.empty().then((response) => {
      setCartItem(response.cart)
      setCartTotal(response.cart.totalItems)});
    };

    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

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
        {activeStep === steps.length ? (
          <div style={{textAlign: 'center'}}>
           Your order is confirmed.
          </div>
        ) : (
          <div  className="checkout-step">
            {getStepContent(activeStep)}<div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button> */}
              <Button variant="contained" color="primary" onClick={handleNext} type="submit">
                {activeStep === steps.length - 1 ? "Submit" : null }
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
}

export default CheckoutFormPage
