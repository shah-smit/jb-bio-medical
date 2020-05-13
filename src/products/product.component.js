import React from 'react';
import { Product } from './product';
import { ProductService } from './products.service'
import { Col, Row, Container, Image } from 'react-bootstrap';
import './product.css';
import CustomNavbar from '../helper/Nav'

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
            <>
            <CustomNavbar currentPage="products"/>
            <div className="product">
                <div className="product-left-div">
                    <Image src={process.env.PUBLIC_URL + this.product.ImageUrl} height="100" width="150" thumbnail /><br />
                </div>
                <div className="product-right-div">
                    <h3>{this.product.Name}</h3><br />
                    <span className="description">{this.product.Description}</span><br />
                    <br/>
                    <a href={process.env.PUBLIC_URL + this.product.PdfUrl}>pdf version</a>
                </div>
                <br /><br />
            </div>
            </>);
    }
}

export default ProductComponent