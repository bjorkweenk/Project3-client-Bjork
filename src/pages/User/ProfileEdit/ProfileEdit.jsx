import React from 'react';
import { Container } from "react-bootstrap"
import "./ProfileEdit.css"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from "../../../services/user.service"
import uploadService from "../../../services/upload.service"
import { useNavigate } from "react-router-dom";




const ProfileEdit = () => {

    const navigate = useNavigate()

    const [profileData, setProfileData] = useState({
        _id: '',
        username: '',
        tagLine: '',
        email: '',
        userImg: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setProfileData({
            
            ...profileData,
            [name]: value               // computed property names
        })
    }

    const handleSubmit = e => {

        e.preventDefault()
        console.log(profileData)

        userService
            .saveUser("629e0bfce94c8adf6704fd4f", profileData.username, profileData.tagLine, profileData.email)
            .then(response => {
                console.log(response)
                
            })
            .catch(err => console.log(err))
    }

   /*  const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfileData({ ...profileData, userImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { username, tagline, email, userImg } = profileData
 */
    return (




        <Form onSubmit={handleSubmit} aftersubmit={() => navigate(`/profile/${profileData._id}`)}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Tagline</Form.Label>
                <Form.Control as="textarea" rows={2} onChange={handleInputChange} name="tagLine" />
  
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" />
            </Form.Group>

           
           {/*  <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label> profile picture</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group> */}

            <button type="submit"> Confirm </button>
        </Form>

    )
}
 
export default ProfileEdit


