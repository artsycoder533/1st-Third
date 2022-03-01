import React, { useEffect, useState } from "react";
import { Center } from "../../components/App/style";
import { Container, ProductContainer, Img, ProductWrapper } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function SingleProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const url = `https://fakestoreapi.com/products/${id}`;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      // setLoading(true);
      const response = await fetch(url);
      const product = await response.json();
      setProduct(product);
      product ? setLoading(false): setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [params]);

  return (
    <>
      <Container>
        <Center>
          {loading ? (
            <Loading />
          ) : (
            <ProductContainer>
              <button onClick={() => navigate(-1)}>Back to All Products</button>
              <Img src={product.image} alt={product.title} />
              <ProductWrapper>
                <h2>{product.title}</h2>
                <p>
                  Rating {product.rating.rate} / 5 {product.rating.count}{" "}
                  reviews
                </p>
                <p>{product.price}</p>
                <button>Add to Cart</button>
                <div>
                  <button>-</button>
                  <span>1 added</span>
                  <button>+</button>
                </div>
              </ProductWrapper>
              <details>
                <summary>Product Description</summary>
                <p>{product.description}</p>
              </details>
              <details>
                <summary>Specifications</summary>
                <p>Category: {product.category}</p>
              </details>
            </ProductContainer>
          )}
        </Center>
      </Container>
    </>
  );
}

export default SingleProductPage;
