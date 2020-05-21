import React from 'react';
import { Card, Button,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { Product } from './product';
import { ProductService } from './products.service'
import CustomNavbar from '../helper/Nav'

import './products.css'

class ProductsComponent extends React.Component {
    products: Product[];

    constructor(props) {
        super(props);
        this.products = [];
    }

    render() {
        let cards = [];
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('search')
        this.products = ProductService.getProducts(token);
        this.products.forEach(product => {
            cards.push(this.getCard(product));
        })
        return (
            <div>
                <CustomNavbar currentPage="products" />
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
                        <Badge variant="secondary">{product.Category}</Badge>
                        <br/>
                        <br/>
                        {product.Description}
                    </Card.Text>
                    <Link to={"/contact/" + product.Name + "/" + "General"}>
                        <Button variant="primary" >Enquire Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductsComponent