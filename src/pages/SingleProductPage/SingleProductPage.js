import React, { useEffect, useState } from "react";
import { Center } from "../../components/App/style";
import { Container, ProductContainer, Img, ProductWrapper, ProductTitle, StyledDetails, StyledParagraph } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { PrimaryButton, SecondaryButton, SpecialButton, ToggleButton } from "../../components/Button/style";

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
          <SecondaryButton onClick={() => navigate(-1)}>
            Back to All Products
          </SecondaryButton>
          {loading ? (
            <Loading />
          ) : (
            <ProductContainer>
              <Img src={product.image} alt={product.title} />
              <ProductWrapper>
                <ProductTitle>{product.title}</ProductTitle>
                <p>Rating {product.rating.rate} / 5 </p>
                <p>{product.rating.count} reviews</p>
                <p>${product.price.toFixed(2)}</p>
                <PrimaryButton>Add to Cart</PrimaryButton>
                {/* <SpecialButton>
                  <ToggleButton>-</ToggleButton>
                  <span> 1 added </span>
                  <ToggleButton>+</ToggleButton>
                </SpecialButton> */}
              </ProductWrapper>
              <StyledDetails>
                <summary>Product Description</summary>
                <StyledParagraph>{product.description}</StyledParagraph>
              </StyledDetails>
              <StyledDetails>
                <summary>Specifications</summary>
                <StyledParagraph>Category: {product.category}</StyledParagraph>
              </StyledDetails>
            </ProductContainer>
          )}
        </Center>
      </Container>
    </>
  );
}

export default SingleProductPage;
