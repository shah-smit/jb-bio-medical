import React from 'react';
import { Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';
import CustomNavbar from '../helper/Nav'

class AboutUsComponent extends React.Component {
    render() {
        return (
            <>
                <CustomNavbar currentPage="products" />
                <Card>
                    <Card.Header as="h5">About Us</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        J B Biomed is a leading brand in dealing with High tech medical and Endoscopy equipemnts/ instruments, Surgical Lasers in all the major discipline.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5">Mission and Vision</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Our Mission and vision are to provide high-tech/ minimal invasive surgical and medical equipment at a very economical price. Also will provide the necessary service to maintain the equipment.
                        <br />
                        Our contribution to give continuous support and provide academic help to explore more and more advance surgical operative procedures with high-tech equipments at reasonable charges.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default AboutUsComponent