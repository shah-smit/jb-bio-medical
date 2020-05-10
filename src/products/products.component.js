import React from 'react';
import { Product } from './product';
import { Card, Button } from 'react-bootstrap';


class ProductsComponent extends React.Component {
    products: Product[];

    constructor() {
        super();
        this.products = [];
    }

    render() {
        this.dummydata();
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

    dummydata() {
        for (let index = 0; index < 10; index++) {
            this.products.push(new Product("Name" + index, "url", "some desc"));
        }
    }
}

export default ProductsComponent