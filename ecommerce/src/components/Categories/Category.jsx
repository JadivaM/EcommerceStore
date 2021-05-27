import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import Navbar from '../Navigation/Navbar';

const Category = () => {
const [categoryProducts, setCategoryProducts] = useState(null)
const { id } = useParams();
const location = useLocation();

useEffect(() => {
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
    getCategory();
}, [location])

    return (
        <>
            <Navbar />
            <div className="products-category-info-container">
            <p className="products-category-slug">{id}</p>
            <p className="products-category-results">{categoryProducts?.length} results</p>
            </div>
            <div className="category-product-cards">
             {categoryProducts?.map((product) => (

                 <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
             ))}
             </div>
        </>
    )
}

export default Category
