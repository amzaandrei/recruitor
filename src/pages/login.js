import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css'
import { Form , Button } from 'react-bootstrap'
import formStyles from "./Form.module.css"



const LogInPage = () => (

    <Form className={formStyles.form}>
        <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter number" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
    

)

export default LogInPage