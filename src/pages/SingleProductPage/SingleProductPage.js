import React, { useEffect, useState, useContext } from "react";
import { Center } from "../../components/App/style";
import { Container, ProductContainer, Img, ProductWrapper, ProductTitle, StyledDetails, StyledParagraph } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { PrimaryButton, SecondaryButton, SpecialButton, ToggleButton } from "../../components/Button/style";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { url } from "../../components/Filter/filterData";
import Star from "../../components/Star/Star";

function SingleProductPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const { singleProduct, fetchSingleProduct, loading } = useContext(ProductsContext);
  console.log(singleProduct);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  const { image, title, rating, price,description, category } = singleProduct;
  const { rate, count } = rating;

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
              <Img src={image} alt={title} />
              <ProductWrapper>
                <ProductTitle>{title}</ProductTitle>
                  {/* <p>Rating {rate} / 5 </p>  */}
                  <Star rate={rate}/>
                <span>{count} reviews</span>
                 <p>${price.toFixed(2)}</p> 
                <PrimaryButton>Add to Cart</PrimaryButton>
                {/* <SpecialButton>
                  <ToggleButton>-</ToggleButton>
                  <span> 1 added </span>
                  <ToggleButton>+</ToggleButton>
                </SpecialButton> */}
              </ProductWrapper>
              <StyledDetails>
                <summary>Product Description</summary>
                <StyledParagraph>{description}</StyledParagraph>
              </StyledDetails>
              <StyledDetails>
                <summary>Specifications</summary>
                <StyledParagraph>Category: {category}</StyledParagraph>
              </StyledDetails>
            </ProductContainer>
          )}
        </Center>
      </Container>
    </>
  );
}

export default SingleProductPage;
