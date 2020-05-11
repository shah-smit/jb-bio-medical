import React from 'react';
import { Product } from './product';
import { ProductService } from './products.service'
import { Col, Row, Container, Image } from 'react-bootstrap';

class ProductComponent extends React.Component {
    products: Product[];

    constructor(props) {
        super(props);
        console.log("props")
        
        this.productId = props.match.params.id;
        console.log(this.productId)
        this.product = ProductService.getProductById(this.productId)
        console.log(this.product)
        this.products = [];
        this.products = ProductService.getProducts();
    }

    render() {
        return (
            <div>
                <Image src={process.env.PUBLIC_URL + this.product.ImageUrl} height="100" width="150" thumbnail /><br/>
                <span>Id: {this.productId}</span><br/>
                <span>Name: {this.product.Name}</span><br/>
                <span>Description: {this.product.Description}</span><br/>
            </div>);
    }
}

export default ProductComponent