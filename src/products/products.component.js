import React from 'react';
import { Product } from './product';
import { ProductService } from './products.service'
import { Card, Button } from 'react-bootstrap';


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
                <h1>Hello, Products Component</h1>
                {cards}
            </div>);
    }

    getCard(product) {
        return (
            <Card style={{ width: '18rem', display: "inline-block" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{product.Name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductsComponent