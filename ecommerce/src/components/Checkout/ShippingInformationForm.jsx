import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const CheckoutForm = ({formData, setFormData, checkoutToken, handleBack, handleNext}) => {
    const [states, setStates] = useState([]);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const fetchStates = () => {
        commerce.services.localeListSubdivisions('US').then(json =>
            setStates(json.subdivisions));
    }



  useEffect(() => {
    fetchStates();
  }, [checkoutToken]);

    return (
        <div>
            <div>
            <FormControl id="form-margin">
            <TextField className="checkout-form-row" label="First name" variant="outlined" value={formData.firstName || ""} onChange={handleChange} required name="firstName" />
            </FormControl>
            <FormControl id="form-margin">
            <TextField className="checkout-form-row" label="Last name" variant="outlined" value={formData.lastName || ""} onChange={handleChange} required name="lastName" />
            </FormControl>
            </div>
            <div>
            <FormControl fullWidth id="form-margin">
            <TextField label="Email" required variant="outlined" value={formData.email || ""} onChange={handleChange} name="email" />
            </FormControl>
            </div>
            <div>
            <FormControl fullWidth id="form-margin">
           <TextField label="Address" required variant="outlined" value={formData.address || ""}  onChange={handleChange} name="address"  />
           </FormControl>
           </div>
            <div>
            <FormControl id="form-margin">
            <TextField label="City" required variant="outlined" value={formData.city || ""} onChange={handleChange} name="city"  />
            </FormControl>
            <FormControl required style={{width: 100}} id="form-margin" variant="outlined">
            <InputLabel>State</InputLabel>
            <Select name="state" defaultValue="" onChange={handleChange}>
                {Object.entries(states).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
            </FormControl>
            <FormControl style={{width: 140}} id="form-margin">
            <TextField required label="Zip code" variant="outlined" value={formData.zip || ""} onChange={handleChange} name="zip" />
            <div className="stepper-buttons-container">
            <Button onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext} type="submit">
              Next
            </Button>
            </div>
            </FormControl>
            </div>
            
        </div>
    )
}

export default CheckoutForm
