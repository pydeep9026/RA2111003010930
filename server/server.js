const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTQ5NTI3LCJpYXQiOjE3MTIxNDkyMjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY2YWU4OTIyLTA4NzQtNGY5MS05ZWI4LTE3NzQ5YzZiZTFkOSIsInN1YiI6InBqMjI3MkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoic3JtaXN0IiwiY2xpZW50SUQiOiI2NmFlODkyMi0wODc0LTRmOTEtOWViOC0xNzc0OWM2YmUxZDkiLCJjbGllbnRTZWNyZXQiOiJnRXNsdE1EbWl4bFFjRUlpIiwib3duZXJOYW1lIjoicHJhZGVlcCBzaW5naCIsIm93bmVyRW1haWwiOiJwajIyNzJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6InJhMjExMTAwMzAxMDkzMCJ9.PkMeTRtS77Avo49YzmZc1ilp8FXHF9Yj5KJzc6q2TtE';


app.get('/categories/:categoryname/products', async (req, res) => {
    try {
        const { companyname, categoryname } = req.params;
        const { top, minPrice, maxPrice, sortBy } = req.query;

        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/categories/:categoryname/products/:productid', async (req, res) => {
    try {
        const { companyname, categoryname, productid } = req.params;

        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
       
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
