import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css'
import { Form , Button } from 'react-bootstrap'
import formStyles from "./Form.module.css"
import { render } from "react-dom"



class LogInPage extends React.Component{

    state = {
        name: "",
        email: "",
        password: "",
        email: "",
        phone: ""
      }
      handleInputChange = event => {
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.email} ${this.state.password}!`)
      }

    render() {
        return(
            <Form className={formStyles.form} onSubmit={ this.handleSubmit }>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" name="name" value={this.state.name}  onChange={this.handleInputChange} type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="email" name="email" value={this.state.email} onChange={this.handleInputChange} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} type="tel" placeholder="Enter number" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" name="password" value={this.state.password} onChange={this.handleInputChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Label> Ati mai fost reprezentant?</Form.Label>
                <Form.Check aria-label="option 1" label = "Da"/>
                <Form.Check aria-label="option 1" label = "Nu"/>
                <br/>
                <Form.Group>
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>

        );
    }
}

export default LogInPage