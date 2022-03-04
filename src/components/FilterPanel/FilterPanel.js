import React from 'react'
import Filter from '../Filter/Filter'
import PriceFilter from '../PriceFilter/PriceFilter'
import StarFilter from '../StarFilter/StarFilter'
import { categories, prices, stars } from '../Filter/filterData'

const FilterPanel = () => {
  return (
      <div>
          <Filter categories={categories} title={"Categories"} />
          <PriceFilter prices={prices} title={"Price"} /> 
          <StarFilter stars={stars} title={"Customer Ratings"}/>
    </div>
  )
}

export default FilterPanel