import React, {useState, useContext } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Cards } from "./style";
import Loading from "../Loading/Loading";
import { CardLink } from "./style";
import { FilterContext } from "../../Contexts/FilterContext";

function Products() {
  const { products, loading, filteredProducts, setFilteredProducts, filterResult, filterCat } = useContext(FilterContext);
  const [filProducts, setFilProducts] = useState([]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <Cards>
          {filteredProducts.map((product) => {
            const { id, title, price, image } = product;
            return (
              <CardLink to={`/shop/${id}`} key={id}>
                <SingleProduct
                  title={title}
                  price={price}
                  image={image}></SingleProduct>
              </CardLink>
            );
          })}
        </Cards>
      )}
    </>
  );
}

export default Products;
