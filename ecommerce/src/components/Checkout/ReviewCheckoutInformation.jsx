// import React from 'react';
// import {TextField, FormControl} from '@material-ui/core';
// // import { useHistory } from "react-router-dom";
// import { commerce } from '../../lib/commerce';

// const ReviewCheckoutInformation = ({formData, setFormData, cartItem}) => {

//     const handleSubmit = (e) => {
//         commerce.cart.empty().then((response) => console.log(response));
//         // history.push("/complete");
//       };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//             <FormControl id="form-margin">
//             <TextField disabled id="standard-disabled" value={formData.firstName} label="First name"/>
//             </FormControl>
//             <FormControl id="form-margin">
//             <TextField disabled id="standard-disabled" value={formData.lastName} label="Last name"/>
//             </FormControl>
//             <FormControl id="form-margin">
//             <TextField disabled disabled id="standard-disabled" value={formData.email} label="Email"/>
//             </FormControl>
//             <FormControl id="form-margin">
//             <TextField disabled id="standard-disabled" value={formData.address} label="Address"/>
//             </FormControl>
//             <FormControl id="form-margin">
//             <TextField disabled id="standard-disabled" value={formData.city} label="City"/>
//             </FormControl>
//             <FormControl id="form-margin">
//             <TextField disabled id="standard-disabled" value={formData.zip} label="Zip code"/>
//             </FormControl>
//             <FormControl id="form-margin">
//             <TextField disabled id="standard-disabled" value={formData.state} label="State"/>
//             </FormControl>
//             <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default ReviewCheckoutInformation
