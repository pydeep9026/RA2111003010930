import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const FilterBar = ({ applyFilters }) => {
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minRating, setMinRating] = useState('');
    const [availability, setAvailability] = useState('');

    const handleApplyFilters = () => {
        applyFilters({ category, company, minPrice, maxPrice, minRating, availability });
    };

    return (
        <Box m={2}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="Category"
                        variant="outlined"
                        fullWidth
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Company"
                        variant="outlined"
                        fullWidth
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Min Price"
                        variant="outlined"
                        fullWidth
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Max Price"
                        variant="outlined"
                        fullWidth
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Min Rating"
                        variant="outlined"
                        fullWidth
                        value={minRating}
                        onChange={(e) => setMinRating(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Availability"
                        variant="outlined"
                        fullWidth
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleApplyFilters}>
                        Apply Filters
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FilterBar;
