import "./Favorites.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

const Favorites = (props) => {

    const [likes, setLikes] = useState(props.likes);

    function handleSubmit(){

        axios.post("/favourites") // review once the routes are done. This route has to update the store's likes and res.json that store's updated likes.length
        .then((response) => setLikes(response.data))
        .catch((err) => console.log(err));
    }


    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <Button type = "submit"> 
                    Like 
                </Button>  
            </form>
            <p>{ likes } likes</p>
        </div> 
    );
    }

export default Favorites;