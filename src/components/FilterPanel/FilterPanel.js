import React, {useContext} from 'react'
import Filter from '../Filter/Filter'
import PriceFilter from '../PriceFilter/PriceFilter'
import StarFilter from '../StarFilter/StarFilter'
import { categories, prices, stars } from '../Filter/filterData';
import { FilterContext } from '../../Contexts/FilterContext';

const FilterPanel = () => {
    const { filterResult} = useContext(FilterContext);

  const resetFilters = (e) => {
    e.preventDefault();
      filterResult(null);
        
    }
    
  return (
      <form>
          <Filter categories={categories} title={"Categories"} />
          <PriceFilter prices={prices} title={"Price"} /> 
          <StarFilter stars={stars} title={"Customer Ratings"} />
          <button onClick={resetFilters}>Reset Filters</button>
    </form>
  )
}

export default FilterPanel