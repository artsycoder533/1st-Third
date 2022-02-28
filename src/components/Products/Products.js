import React, { useState, useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { Cards } from './style';

const url = "https://fakestoreapi.com/products";

function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
    }
    
    useEffect(() => {
        getProducts()
    }, []);

    console.log(products);
  return (
      <Cards>
          {products.map(product => {
              const { id, title, price, description, category, image, rating } = product;
              const { rate, count } = rating;
              return <SingleProduct key={id} title={title} price={price} image={image}></SingleProduct>
          })}
    </Cards>
  )
}

export default Products