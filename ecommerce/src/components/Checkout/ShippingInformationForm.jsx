import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const CheckoutForm = ({formData, setFormData, checkoutToken}) => {
    const [states, setStates] = useState([]);
    const [userState, setUserState] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      };

      const fetchStates = () => {
        commerce.services.localeListSubdivisions('US').then(json =>
            setStates(json.subdivisions));
    }


  useEffect(() => {
    fetchStates(checkoutToken?.id, userState);
  }, [userState]);

    return (
        <div>
            <div>
            <FormControl id="form-margin">
            <TextField className="checkout-form-row" id="outlined-basic" label="First name" variant="outlined" value={formData.firstName} onChange={handleChange} name="firstName" />
            </FormControl>
            <FormControl id="form-margin">
            <TextField className="checkout-form-row" id="outlined-basic" label="Last name" variant="outlined" value={formData.lastName} onChange={handleChange} name="lastName" />
            </FormControl>
            </div>
            <div>
            <FormControl fullWidth id="form-margin">
            <TextField id="outlined-basic" label="Email" variant="outlined" value={formData.email} onChange={handleChange} name="email" />
            </FormControl>
            </div>
            <div>
            <FormControl fullWidth id="form-margin">
           <TextField id="outlined-basic" label="Address" variant="outlined" value={formData.address} onChange={handleChange} name="address"  />
           </FormControl>
           </div>
            <div>
           
            <FormControl id="form-margin">
            <TextField id="outlined-basic" label="City" variant="outlined" value={formData.city} onChange={handleChange} name="city"  />
            </FormControl>
            <FormControl style={{width: 100}} id="form-margin" variant="outlined">
            <InputLabel>State</InputLabel>
            <Select name="state" value={formData.state} onChange={handleChange}>
                {Object.entries(states).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
            </FormControl>
            <FormControl style={{width: 140}} id="form-margin">
            <TextField id="outlined-basic" label="Zip code" variant="outlined" value={formData.zip} onChange={handleChange} name="zip" />
            </FormControl>
            </div>
        </div>
    )
}

export default CheckoutForm
