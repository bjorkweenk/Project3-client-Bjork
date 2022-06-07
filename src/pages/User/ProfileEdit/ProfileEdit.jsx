import React from 'react';
import "./ProfileEdit.css"
import { useState, useContext, useEffect} from "react"
import { Form } from "react-bootstrap"
import userService from "../../../services/user.service"
import uploadService from "../../../services/upload.service"
import { useNavigate, useParams } from "react-router-dom";
import {AuthContext} from "../../../context/auth.context"



const ProfileEdit = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const {id} = useParams()

    const [profileData, setProfileData] = useState({
        user: id,
        username: '',
        tagLine: '',
        email: '',
        userImg: ''
    })

    useEffect(() => {
        userService
        .getOneUser(id)
        .then((userDB) => {
            setProfileData(userDB.data)
        })
    }, []);

    const [loadingImage, setLoadingImage] = useState(false)

    const { username, tagLine, email, userImg } = profileData

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setProfileData({
            ...profileData,
            [name]: value              
        })
    }

    const handleSubmit = e => {

        e.preventDefault()
        userService
            .saveUser(user._id, profileData)
            .then(response => {
                navigate(`/profile/${profileData._id}`)       
            })
            .catch(error => (error))
    }

 const handleImageUpload = (e) => {
        e.preventDefault();
        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfileData({ ...profileData, userImg: data.cloudinary_url })
            })
            .catch(error => (error))
    }

  
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={profileData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Tagline</Form.Label>
                <Form.Control as="textarea" value={profileData.tagLine} rows={2} onChange={handleInputChange} name="tagLine" />
  
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" value={profileData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label> profile picture</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group> 

            <button type="submit"> Confirm </button>
        </Form>

    )
}
 
export default ProfileEdit


