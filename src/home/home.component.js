import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Welcome to JB Bio Medical Equipments Showcase!
                    </p>
                    <Link to="/products">Catalogue</Link>
                    <Link to="/contact">Contact Us</Link>
                </header>
            </div>
        );
    }
}

export default HomeComponent