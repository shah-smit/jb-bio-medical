import React from 'react';
import CustomNavbar from '../helper/Nav'
import { Card, Form, Col, Button } from 'react-bootstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import './contact.us.css'

class ContactUsComponent extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleProductCategory = this.handleProductCategory.bind(this);
        this.handleProductName = this.handleProductName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserPhone = this.handleUserPhone.bind(this);
        this.handleUserName = this.handleUserName.bind(this);

        this.onChangeCaptcha = this.onChangeCaptcha.bind(this);

        this.state = {
            timestamp: "",
            user_name: "",
            user_phone: "",
            user_email: "",
            message: "",
            product_name: "",
            product_category: ""
        }
    }

    onChangeCaptcha(value) {
        console.log("Captcha value:", value);
    }

    handleSubmit(event) {
        var obj = this.state;
        obj.timestamp = this.getCurrentDateTime();
        if (this.validateFields(obj)) {
            fetch('https://sendmail-nodejs.herokuapp.com/sendmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(obj)
            })
            .then((res) => {
                //To many requests
                if(res.status == 429){
                    this.sendWarningNotifs("Error in submiting contact form.", 180000)
                }
            })
            .catch((err) => {
                console.log(err);
                this.sendWarningNotifs("Something went wrong!", 3000)
            })
        }
    }

    validateFields(obj) {
        //Assuming ProductName and Category can be empty
        if (obj === null || obj === undefined || obj.timestamp === "" || obj.user_name === "" || obj.user_email === "" || obj.user_phone === "" || obj.message === "") {
            this.sendWarningNotifs("All fileds must be filled!",3000)
            return false;
        }

        return true;
    }

    getCurrentDateTime() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        var day = days[d.getDay()];
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "am";
        if (hr > 12) {
            hr -= 12;
            ampm = "pm";
        }
        var date = d.getDate();
        var month = months[d.getMonth()];
        var year = d.getFullYear();
        return day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
    }

    handleProductName(e) {
        this.setState({ product_name: e.target.value });
    }

    handleProductCategory(e) {
        this.setState({ product_category: e.target.value });
    }

    handleUserEmail(e) {
        this.setState({ user_email: e.target.value });
    }

    handleUserPhone(e) {
        this.setState({ user_phone: e.target.value });
    }

    handleUserName(e) {
        this.setState({ user_name: e.target.value });
    }

    handleMessage(e) {
        this.setState({ message: e.target.value });
    }

    sendWarningNotifs(message, mil){
        NotificationManager.warning(message, `Close after ${mil}ms`, mil);
    }

    render() {
        return (
            <>
                <CustomNavbar currentPage="products" />
                <NotificationContainer/>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" value={this.state.product_name} onChange={this.handleProductName} placeholder="product name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Product Category</Form.Label>
                                    <Form.Control type="ext" value={this.state.product_category} onChange={this.handleProductCategory} placeholder="Category" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.state.user_name} onChange={this.handleUserName} placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={this.state.user_email} onChange={this.handleUserEmail} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" value={this.state.user_phone} onChange={this.handleUserPhone} placeholder="Enter phone number" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.message} onChange={this.handleMessage} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </>);
    }
}

export default ContactUsComponent;