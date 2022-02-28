import React from 'react'
import { Card, CardTitle, Img, Price } from './style';

function SingleProduct({ id, title, price, description, category, image, rate, count}) {
    return (
        <Card>
            <Img src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <Price>${price}</Price>
        </Card>
    );
}

export default SingleProduct