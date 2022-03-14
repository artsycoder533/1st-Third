import React, {useState, useContext } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Cards } from "./style";
import Loading from "../Loading/Loading";
import { CardLink } from "./style";
import { ProductsContext } from "../../Contexts/ProductsContext";

function Products() {
  const {products, loading} = useContext(ProductsContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <Cards>
          {products.map((product) => {
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
