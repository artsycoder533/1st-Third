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
  StyledSpan,
  AddToCartButton,
  UpdateQuantityButton,
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
import { isItemInCart } from "../../utility/utils";

function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleProduct, fetchSingleProduct, loading } =
    useContext(ProductsContext);
  const { handleAddToCart, cart, decreaseCartCount } = useContext(CartContext);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading || Object.keys(singleProduct).length === 0) {
    return <Loading />;
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
              {isItemInCart(id, cart) ? (
                <UpdateQuantityButton>
                  <StyledSpan
                    role="button"
                    onClick={() => decreaseCartCount(id)}>
                    -
                  </StyledSpan>
                  In Cart
                  <StyledSpan role="button" onClick={() => handleAddToCart(id)}>
                    +
                  </StyledSpan>
                </UpdateQuantityButton>
              ) : (
                <AddToCartButton onClick={() => handleAddToCart(id)}>
                  Add to Cart
                </AddToCartButton>
              )}
            </ProductWrapper>
            <details>
              <summary>Product Description</summary>
              <div>
                <StyledParagraph>{description}</StyledParagraph>
              </div>
            </details>
            <details>
              <summary>Specifications</summary>
              <div>
                <StyledParagraph>Category: {category}</StyledParagraph>
              </div>
            </details>
          </div>
        </ProductContainer>
      </Center>
    </main>
  );
}

export default SingleProductPage;
