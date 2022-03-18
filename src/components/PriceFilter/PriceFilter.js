import React, { useContext} from "react";
import { FilterContext } from "../../Contexts/FilterContext";
import { Container } from "./style";

function PriceFilter({ prices, title }) {
  const { handleFilters, isChecked } = useContext(FilterContext);


  return (
    <Container>
      <h2>{title}</h2>
      {prices.map((price, index) => {
        const { lowPrice, highPrice } = price;
        return (
          <div key={highPrice}>
            <input
              type="checkbox"
              id={lowPrice}
              value={highPrice}
              checked={isChecked[index]}
              name={title}
              onChange={(e)=>handleFilters(e, index)}
              ></input>
            <label htmlFor={lowPrice}>
              ${lowPrice} - {highPrice === "and up" ? highPrice :  ` $${highPrice}` }
            </label>
          </div>
        );
      })}
    </Container>
  );
}

export default PriceFilter;
//${highPrice}