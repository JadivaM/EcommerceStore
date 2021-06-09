import React, {useState, useEffect} from 'react';
import CarouselSlide from 'react-material-ui-carousel';
import Carousel from 'react-material-ui-carousel';


const DiscountsGrid = () => {
    const [discounts, setDiscounts ] = useState([]);
    

        useEffect(() => {
            const getDiscounts = () => {
                let headers = {
                    "X-Authorization": process.env.REACT_APP_CHEC_SECRET_KEY,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                };
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
            getDiscounts();
          }, []);

    return (
        <>
        <Carousel 
        animation={'fade'}
        indicators={false}
        autoPlay={true}
        stopAutoPlayOnHover={true}
        interval={10000}
        swipe={true}
        navButtonsProps={{
            style: {
                backgroundColor: 'transparent',
                color: 'black'
            }
        }}
        >
        {discounts?.map((discount) => (
            <>
        <CarouselSlide>
              <p className="discount-text-carousel">{discount.value}% off {discount.code} with code {discount.code}</p>
        </CarouselSlide>
</>
        ))}
        </Carousel>
        </>
    )
}

export default DiscountsGrid
