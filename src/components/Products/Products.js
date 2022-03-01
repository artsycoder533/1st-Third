import React, { useState, useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { Cards } from './style';
import Loading from '../Loading/Loading';

const url = "https://fakestoreapi.com/products";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const products = await response.json();
            setProducts(products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getProducts();
    }, []);

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <Cards>
            {products.map((product) => {
              const { id, title, price, description, category, image, rating } =
                product;
              const { rate, count } = rating;
              return (
                <SingleProduct
                  key={id}
                  title={title}
                  price={price}
                  image={image}></SingleProduct>
              );
            })}
          </Cards>
            )}
      </>
    );
}

export default Products