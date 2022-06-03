
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import StoresService from './../../../services/store.service.js'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from '../../../components/Loader/Loader'
import Favourites from "./../../../components/Favourites/Favourites"

function StoreDetails() {

    const [storeDetails, setStoreDetails] = useState()

    const { store_id } = useParams()

    useEffect(() => {

        StoresService
            .getStoreDetails(store_id)
            .then(({ data }) => setStoreDetails(data))
            .catch(err => console.log(err))

    }, [])

    return (

        !storeDetails
            ?
            <Loader />
            :
            <Container>
                <h1>{storeDetails.storeName}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <p>{storeDetails.storeAddress}</p>
                        <p>{storeDetails.storePhone}</p>
                        <p>{storeDetails.deliveryTime}</p>
                        <p>{storeDetails.priceRange}</p>
                    </Col>
                    {/* <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={storeDetails.storeImg} alt={storeDetails.storeName} />
                    </Col> missing store products  */} 
                </Row>

            </Container>
    )
}

export default StoreDetails;
