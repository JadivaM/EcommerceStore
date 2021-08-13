import React from 'react';
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Button, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const stripePromise = loadStripe( process.env.REACT_APP_STRIPE_PUBLIC_KEY );


const PaymentDetailsForm = ({checkoutToken, handleCheckout, handleBack, handleNext}) => {

  const handleSubmit = (event, elements, stripe) => {
    event.preventDefault();
    handleCheckout();
    handleNext();
      };

     
    return (
          <div className="payment-info">
            <h3>Payment details</h3>
          <Elements stripe={stripePromise}>
          <ElementsConsumer>{({ elements, stripe }) => (
            <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
           <Divider />
          <h3>Review order</h3>
          <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <p>{product.line_total.formatted_with_symbol}</p>
          </ListItem>
          ))}
          </List>
            <div className="stepper-buttons-container">
            <Button onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" disabled={!stripe} type="submit">
              Pay {checkoutToken.live.subtotal.formatted_with_symbol}
            </Button>
            </div>
           </form>
          )}
          </ElementsConsumer>
        </Elements>  
   
        </div>
        )
}

export default PaymentDetailsForm
