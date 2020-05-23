import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

import CustomNavbar from '../helper/Nav'

class HomeComponent extends React.Component {
    render() {
        return (
            <>
            <CustomNavbar currentPage="products"/>
            <div className="App">
                <header className="App-header">
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} className="App-logo" alt="logo" />
                    <p>
                    Welcome to JB Bio Medical Equipments Showcase!
                    </p>
                    <Link to="/products">Catalogue</Link>
                    <Link to="/contact">Contact Us</Link>
                </header>
            </div>
            </>
        );
    }
}

export default HomeComponent