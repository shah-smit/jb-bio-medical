import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'
import { Image,Carousel } from 'react-bootstrap'
import CustomFooter from '../helper/Footer'

import CustomNavbar from '../helper/Nav'

class HomeComponent extends React.Component {
    render() {
        return (
            <>
                <CustomNavbar currentPage="products" />
                <div className="App">
                    <header className="App-header">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} className="App-logo" alt="logo" />
                    <p>
                    Welcome to JB Bio Medical Equipments Showcase!
                    </p>
                    <Link to="/products">Catalogue</Link>
                    <Link to="/contact">Contact Us</Link>
                        {/* <Image src={process.env.PUBLIC_URL + "/images/banner.png"} fluid /> */}
                    </header>
                    {/* <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + "/images/banner.png"}
                                alt="First slide"
                            /> */}
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        {/* </Carousel.Item>
                    </Carousel> */}
                </div>
                <CustomFooter></CustomFooter>
            </>
        );
    }
}

export default HomeComponent