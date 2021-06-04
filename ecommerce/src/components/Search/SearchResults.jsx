import React from 'react';
import ProductCard from '../Products/ProductCard';

const SearchResults = ({searchResults}) => {
    return (
        <>
        <div className="search-results-container">
            {!searchResults || searchResults.length === 0 ? <p>No search Results found</p> :  <p className="products-category-results">{searchResults?.length} results</p>}
        </div>
        <div className="category-product-cards">
         {searchResults && searchResults?.map((product) => (
             <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
         ))}
         </div>
    </>
    )
}

export default SearchResults
