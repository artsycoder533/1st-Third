import React, {useParms} from 'react'
import { Card, CardLink, CardTitle, Img, Price } from './style';
import { Link } from 'react-router-dom';

function SingleProduct({ id, title, price, description, category, image, rate, count}) {
    return (
      <CardLink to="">
        <Card>
          <Img src={image} alt={title} />
          <CardTitle>{title}</CardTitle>
          <Price>${price.toFixed(2)}</Price>
        </Card>
      </CardLink>
    );
}

export default SingleProduct