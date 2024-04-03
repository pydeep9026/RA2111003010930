import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" component="div">
                    {product.productName}
                </Typography>
                <Typography variant="body1" component="div">
                    Company: {product.company}
                </Typography>
                <Typography variant="body1" component="div">
                    Category: {product.category}
                </Typography>
                <Typography variant="body1" component="div">
                    Price: {product.price}
                </Typography>
                <Typography variant="body1" component="div">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body1" component="div">
                    Discount: {product.discount}
                </Typography>
                <Typography variant="body1" component="div">
                    Availability: {product.availability}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
