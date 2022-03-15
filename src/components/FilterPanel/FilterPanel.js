import React, {useContext} from 'react'
import Filter from '../Filter/Filter'
import PriceFilter from '../PriceFilter/PriceFilter'
import StarFilter from '../StarFilter/StarFilter'
import { categories, prices, stars } from '../Filter/filterData';
import { FilterContext, ProductsContext } from '../../Contexts/ProductsContext';
import SortProducts from '../Sort/SortProducts';

const FilterPanel = () => {
    const { filterResult, setSelectedCategory, setFilteredProducts, filteredProducts} = useContext(ProductsContext);

  const resetFilters = (e) => {
    e.preventDefault();
    filterResult(null);
    setSelectedCategory("");
    setFilteredProducts(filteredProducts);
    }
    
  return (
    <div>
      <SortProducts />
          <Filter categories={categories} title={"Categories"} />
          <PriceFilter prices={prices} title={"Price"} /> 
          <StarFilter stars={stars} title={"Customer Ratings"} />
          <button onClick={resetFilters}>Reset Filters</button>
    </div>
  )
}

export default FilterPanel