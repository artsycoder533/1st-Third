import React, { useEffect, useContext } from "react";
import { Center, StyledHeading } from "../../components/App/style";
import {
  Container,
  ProductContainer,
  Img,
  ProductWrapper,
  ProductTitle,
  StyledDetails,
  StyledParagraph,
  BackButton,
} from "./style";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {
  PrimaryButton,
  SecondaryButton,
  SpecialButton,
  ToggleButton,
} from "../../components/Button/style";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { url } from "../../components/Filter/filterData";
import Star from "../../components/Star/Star";
import { CartContext } from "../../Contexts/CartContext";

function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleProduct, fetchSingleProduct, loading } =
    useContext(ProductsContext);
  const { handleAddToCart, cart } = useContext(CartContext);


  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);


  if (loading || Object.keys(singleProduct).length === 0) {
    return <Loading />
  }

  const { image, title, rating, price, description, category } = singleProduct;
  const { rate, count } = rating;

  return (
    <main>
      <StyledHeading>
        <BackButton onClick={() => navigate(-1)}>
          Back to All Products
        </BackButton>
      </StyledHeading>
      {/* <Container> */}
        <Center>
          <ProductContainer>
            <Img src={image} alt={title} />
            <div>
              <ProductWrapper>
                <ProductTitle>{title}</ProductTitle>

                <span>
                  <Star rate={rate} />
                  {count} reviews
                </span>
                <p>${price.toFixed(2)}</p>
                {/* if this item is in the cart switch the button */}
                {!cart.includes(singleProduct) ? (
                  <PrimaryButton onClick={() => handleAddToCart(id)}>
                    Add to Cart
                  </PrimaryButton>
                ) : (
                  <SpecialButton>
                    <span>-</span>
                    <span> X added </span>
                    <span onClick={() => handleAddToCart(id)}>+</span>
                  </SpecialButton>
                )}
              </ProductWrapper>

              <StyledDetails>
                <summary>Product Description</summary>
                <StyledParagraph>{description}</StyledParagraph>
              </StyledDetails>
              <StyledDetails>
                <summary>Specifications</summary>
                <StyledParagraph>Category: {category}</StyledParagraph>
              </StyledDetails>
            </div>
          </ProductContainer>
          
        </Center>
      {/* </Container> */}
    </main>
  );
  

  
}

export default SingleProductPage;
