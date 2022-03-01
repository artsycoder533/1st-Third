import React, {useEffect} from 'react';
import { Center } from '../../components/App/style';
import { Container, ProductContainer } from './style';
import { useParams } from 'react-router-dom';

function SingleProductPage() {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    console.log("Params", params);
  }, [params]);

  return (
    <Container>
      <Center>
        <ProductContainer >
          <h2>Item {id}</h2>
        </ProductContainer>
      </Center>
    </Container>
  );
}

export default SingleProductPage