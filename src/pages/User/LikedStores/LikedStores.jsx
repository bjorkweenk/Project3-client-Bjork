import React from 'react';
import {useState, useEffect} from 'react'
import StoresService from "../../../services/store.service.js"



export default function LikedStores (props){
    const [storesLiked, setStoresLiked] = useState(null);

    useEffect(() => {
        StoresService 
        .getStoresLiked(props.storeId)
        .then((res) => setStoresLiked(res))
    }, [])



    return(
        <div>
        <a href={`/${props.storeId}/like`}>See all</a>
        </div>
    )
}