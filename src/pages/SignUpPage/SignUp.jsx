import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/Signup'

const SignupPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Sign Up</h1>
                    <hr />
                    <SignupForm />

                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage