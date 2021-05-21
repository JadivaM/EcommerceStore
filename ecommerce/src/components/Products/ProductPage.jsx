import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import { useParams } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const ProductPage = () => {
    const [productInfo, setProductInfo] = useState(null)
    const { id } = useParams();

    const getProduct = () => {
        try {
            commerce.products.retrieve(`${id}`).then((res) => {
                setProductInfo(res); 
                console.log(res);
                })
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
        <Navbar />
        <div>
            <p>{productInfo?.name}</p>
            
        </div>
        </>
    )
}

export default ProductPage
