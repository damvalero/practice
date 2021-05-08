import React from 'react';
import Product from '../components/Product';
import products from '../products';
import {Row, Col} from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <>
        <h1>Welcome to Cooking Time</h1>
            <h1>Latets Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} >
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
