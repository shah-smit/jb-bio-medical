import React from 'react';
import CustomNavbar from '../helper/Nav'
import { Card, Form, Col, Button, Alert,Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './contact.us.css'
import maps from './maps.png'
import CustomFooter from '../helper/Footer';

class ContactUsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleProductCategory = this.handleProductCategory.bind(this);
        this.handleProductName = this.handleProductName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserPhone = this.handleUserPhone.bind(this);
        this.handleUserName = this.handleUserName.bind(this);

        this.onChangeCaptcha = this.onChangeCaptcha.bind(this);
        console.log(props);
        var product_name = "";
        console.log(props.match.params.product_name)
        if (props.match.params.product_name) {
            product_name = props.match.params.product_name
        }

        var product_category = "";
        console.log(props.match.params.product_category)
        if (props.match.params.product_category) {
            product_category = props.match.params.product_category
        }

        var foundParams = false;
        if (product_category == "" || product_name == "") {
            product_category = "";
            product_name = "";
        } else {
            foundParams = true;
        }

        console.log(product_category);
        console.log(product_name);

        this.state = {
            timestamp: "",
            user_name: "",
            user_phone: "",
            user_email: "",
            message: "",
            product_name: product_name,
            product_category: product_category,
            disable_product_fields: foundParams,
            formSubmitted: false,
            processing: false
        }
    }

    onChangeCaptcha(value) {
        console.log("Captcha value:", value);
    }

    handleSubmit(event) {
        var obj = this.state;
        obj.timestamp = this.getCurrentDateTime();
        obj.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.setState({ processing: true })

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
                    if (res.status == 429) {
                        this.sendWarningNotifs("Error in submiting contact form.", 180000)
                        this.setState({ processing: false })
                    } else {
                        this.setState({
                            formSubmitted: true,
                            processing: false
                        })
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.sendWarningNotifs("Something went wrong!", 3000)
                    this.setState({ processing: false })
                })
        }
        else {
            this.setState({ processing: false })
        }
    }

    validateFields(obj) {
        //Assuming ProductName and Category can be empty
        if (obj === null || obj === undefined || obj.timestamp === "" || obj.user_name === "" || obj.user_email === "" || obj.user_phone === "" || obj.message === "") {
            this.sendWarningNotifs("All fileds must be filled!", 3000)
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

    sendWarningNotifs(message, milliseconds) {
        this.createNotification("warning", message, null, milliseconds);
    }

    createNotification(type, message, submessage, milliseconds) {
        submessage = submessage == null ? `Close after ${milliseconds}ms` : submessage;
        switch (type) {
            case 'info':
                NotificationManager.info(message);
                break;
            case 'success':
                NotificationManager.success(submessage, message);
                break;
            case 'warning':
                NotificationManager.warning(submessage, message, milliseconds);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    console.log("callback")
                });
                break;
        }
    }

    render() {
        if (this.state.formSubmitted) {
            return this.renderSubmission();
        }
        else return (
            <>
                <CustomNavbar currentPage="products" />
                <NotificationContainer />
                <Card>
                    <Card.Header as="h5">Inquire</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" value={this.state.product_name} onChange={this.handleProductName} placeholder="product name" disabled={this.state.disable_product_fields || this.state.processing} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Product Category</Form.Label>
                                    <Form.Control type="ext" value={this.state.product_category} onChange={this.handleProductCategory} placeholder="Category" disabled={this.state.disable_product_fields || this.state.processing} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name<sup>*</sup></Form.Label>
                                    <Form.Control type="text" value={this.state.user_name} onChange={this.handleUserName} placeholder="Enter Name" disabled={this.state.processing} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email<sup>*</sup></Form.Label>
                                    <Form.Control type="email" value={this.state.user_email} onChange={this.handleUserEmail} placeholder="Enter email" disabled={this.state.processing} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Phone Number<sup>*</sup></Form.Label>
                                    <Form.Control type="text" value={this.state.user_phone} onChange={this.handleUserPhone} placeholder="Enter phone number" disabled={this.state.processing} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message<sup>*</sup></Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.message} onChange={this.handleMessage} disabled={this.state.processing} />
                            </Form.Group>

                            <p><sup>*</sup> Mandatory fields. <br/></p>

                            <Button variant="primary" type="submit" onClick={this.handleSubmit} disabled={this.state.processing}>
                                {this.state.processing ?
                                    this.renderLoading() : "Submit"}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5">Contact Details</Card.Header>
                    <Card.Body>
                        <Card.Title>Company Address</Card.Title>
                        <Card.Text>
                            A-117, Tirthraj Complex, Opp. V S Hospital, <br/>
                            Ellisbridge, Ahmedabad-380006 <br/>
                            <img src={maps} />
                        </Card.Text>
                        <Card.Title>Contact Number</Card.Title>
                        <Card.Text>
                            +91 9825065681
                        </Card.Text>
                        <Button variant="primary" href="whatsapp://send?phone=+919825065681">Open on Whatsapp</Button>
                    </Card.Body>
                </Card>
                <br/>
                <CustomFooter></CustomFooter>
            </>);
    }

    renderLoading() {
        return (
            <>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Processing...
            </>
        );
    }

    renderSubmission() {
        return (
            <>
                <CustomNavbar currentPage="products" />
                <NotificationContainer />
                <br />
                <br />
                <Alert variant="success">
                    <Alert.Heading>Thank you for contacting us!</Alert.Heading>
                    <p>
                        Contact form has been submitted based on the contact details, the admin will contact you as soon as possible.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Link to={"/products"}>
                            <Button variant="outline-success">
                                View Products
                        </Button>
                        </Link>
                    </div>
                </Alert>
            </>
        );
    }
}

export default ContactUsComponent;