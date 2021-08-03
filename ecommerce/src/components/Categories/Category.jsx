import React, {useState, useEffect, useContext} from 'react';
import { commerce } from '../../lib/commerce';
import { useParams, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ProductCard from '../Products/ProductCard';

const Category = () => {
  const { setLoading } = useContext(AppContext);
  const [categoryProducts, setCategoryProducts] = useState(null)
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getCategory = () => {
      try {
        setLoading(true);
        commerce.products.list({'category_slug': [`${id}`]}).   then((res) => {
          setLoading(false);
          setCategoryProducts(res.data); 
          console.log(res.data);
        })
      } catch(err) {
        console.log(err)
      }
    }
    getCategory();
}, [location.hash, id])

    return (
        <>
            <div className="products-category-info-container">
            <p className="products-category-title">{id}</p>
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
