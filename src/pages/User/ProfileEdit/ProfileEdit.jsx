import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from "../../../services/user.service"
import uploadService from "../../../services/upload.service"


const ProfileEdit = ({ fireFinalActions }) => {

    const [profileData, setProfileData] = useState({
        surname: '',
        tagline: '',
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

        userService
            .saveUser(profileData)
            .then(response => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    const handleImageUpload = (e) => {

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

    const { surname, tagline, email, userImg } = profileData

    return (


        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Tagline</Form.Label>
                <Form.Control as="textarea" rows={2} onChange={handleInputChange} name="description" />
  
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="length" />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label> profile picture</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Wait a little ': 'Upload'}</Button>
        </Form>

    )
}


export default ProfileEdit 