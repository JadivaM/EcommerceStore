import React from 'react';
import ProductCard from '../Products/ProductCard';

const SearchResults = ({searchResults}) => {
    console.log(searchResults)

    return (
        <>
        <div className="search-results-container">
        <p className="products-category-results">{searchResults?.length} results</p>
        </div>
        <div className="category-product-cards">
         {searchResults?.map((product) => (

             <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
         ))}
         </div>
    </>
    )
}

export default SearchResults
