import React, {useState, useEffect} from 'react';

const DiscountsGrid = () => {
    const [discounts, setDiscounts ] = useState([]);
    
    let headers = {
        "X-Authorization": process.env.REACT_APP_CHEC_SECRET_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    
const getDiscounts = () => {
    try {
        fetch("https://api.chec.io/v1/discounts", {
            method: "GET",
            headers: headers,
        })
        .then((res) => {
            res.json().then((res) => {
              setDiscounts(res.data);
              console.log(res.data);
            });
          });
    } catch(err) {
        console.log(err);
    }
}

        useEffect(() => {
            getDiscounts();
          }, []);

    return (
        <>
        <div>
            <h1>Discounts</h1>
        <div className="discount-grid-container">
            {discounts.map((discount) => (
            <div className="discount-grid-item" key={discount.id}>{discount.code} {discount.value}%</div>
            ))}
           
        </div>
        </div>
        </>
    )
}

export default DiscountsGrid
