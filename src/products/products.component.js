import React from 'react';
import { Product } from './product';
import { ProductService } from './products.service'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

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
                <Card.Img variant="top" src={process.env.PUBLIC_URL + product.ImageUrl} height="100" width="150" />
                <Card.Body>
                    <Card.Title>{product.Name}</Card.Title>
                    <Card.Text>
                        {product.Description}
                    </Card.Text>
                    <Link to={"/product/"+product.Id}>
                        <Button variant="primary" href={"/product/"+product.Id}>Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductsComponent