import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import FilterBar from './components/FilterBar';

const theme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FilterBar />
        <Routes>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
