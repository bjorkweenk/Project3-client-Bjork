import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from '../../context/message.context'
import './Login.css'

const Loginform = () => {

    const [loginData, setLoginData] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const { showMessage } = useContext(MessageContext)

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                showMessage('Welcome!! Find your new favourite restaurant!!')
                navigate('/home')
            })
            .catch(err => console.log("Unable to login: ", err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData



    return (

        <>
            <div class="container">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width={400} height={400} />
                <img src="https://files.slack.com/files-pri/T02CQ4EN4-F03J71R9KQE/image_from_ios.jpg"/>
                <div class="text">
                </div>
                
            </div>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="login" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
                </Form.Group>

                <Form.Group className="login" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
                </Form.Group>

                <Button variant="dark" type="submit">Log in</Button>
            </Form>


        </>

    )
}

console.log("name")

export default Loginform