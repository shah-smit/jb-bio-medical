import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class CustomNavbar extends React.Component {

  constructor(props) {
    super(props)
    this.onChangeSearchField = this.onChangeSearchField.bind(this)
    this.onSearchClicked = this.onSearchClicked.bind(this)

    this.state = {
      searchField: ""
    }
  }

  onChangeSearchField(e) {
    this.setState({ searchField: e.target.value });
  }

  onSearchClicked(e) {
    this.props.history.push('/products?search=' + this.state.searchField)
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#products">Catalogue</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Enter Product Name" value={this.state.searchField} onChange={this.onChangeSearchField} className="mr-sm-2" />
            <Button variant="outline-success" onClick={this.onSearchClicked}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(CustomNavbar);
