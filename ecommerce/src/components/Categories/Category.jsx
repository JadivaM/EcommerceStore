import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product';
import Navbar from '../Navigation/Navbar';

const Category = () => {
const [categoryProducts, setCategoryProducts] = useState(null)
const { id } = useParams();

const getCategory = () => {
        try {
            commerce.products.list({'category_slug': [`${id}`]}).then((res) => {
            setCategoryProducts(res.data); 
              console.log(res.data);
            })
          } catch(err) {
            console.log(err)
          }
        }


useEffect(() => {
    getCategory()
}, [])

    return (
        <>
            <Navbar />
            <div>
             {categoryProducts?.map((product) => (
                 <Product key={product.id} name={product.name} image={product.media.source} {...product} />
             ))}
             </div>
        </>
    )
}

export default Category
