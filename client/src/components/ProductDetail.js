import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/categories/Laptop/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    return (
        <Container>
            {product ? (
                <div>
                    <Typography variant="h4" component="div">
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
                </div>
            ) : (
                <Typography variant="body1" component="div">
                    Loading...
                </Typography>
            )}
        </Container>
    );
};

export default ProductDetailPage;

