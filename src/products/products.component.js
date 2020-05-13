import React from 'react';
import { Card, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { Product } from './product';
import { ProductService } from './products.service'
import CustomNavbar from '../helper/Nav'

import './products.css'

class ProductsComponent extends React.Component {
    products: Product[];

    constructor() {
        super();
        this.products = [];
        this.products = ProductService.getProducts();
    }

    render() {
        let cards = [];
        this.products.forEach(product => {
            cards.push(this.getCard(product));
        })
        return (
            <div>
                <CustomNavbar currentPage="products"/>
                {cards}
            </div>);
    }

    getCard(product) {
        return (
            <Card style={{ width: '18rem', display: "inline-block" }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + product.ImageUrl} />
                <Card.Body>
                    <Card.Title>{product.Name}</Card.Title>
                    <Card.Text>
                        {product.Description}
                    </Card.Text>
                    <Link to={"/product/"+product.Id}>
                        <Button variant="primary" >Enquire Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductsComponent