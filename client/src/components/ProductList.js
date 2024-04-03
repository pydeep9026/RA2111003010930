import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Container, Grid } from '@mui/material';
import FilterBar from './FilterBar';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async (filters = {}) => {
        try {
            setLoading(true);
            const response = await axios.get('/categories/Laptop/products', {
                params: filters
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApplyFilters = (filters) => {
        fetchProducts(filters);
    };

    return (
        <Container>
            <FilterBar applyFilters={handleApplyFilters} />
            <Grid container spacing={2}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
