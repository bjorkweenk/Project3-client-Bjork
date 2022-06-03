import "./LikesBtn.css";
import axios from "axios"
import { Button} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { useContext } from "react";
import { useState } from "react";

const LikesBtn = (props) => {

    const [likes, setLikes] = useState(0);
    const [likedStores, setStoresLikes] = useState(null)

    const addLikes = () => {
        let newCount = likes + 1;
        setLikes({
          likes: newCount
        });
      };

    const handleLikes = () => {
        
    }

    


    return (
        <div>
            <form>
                <Button onClick={addLikes}> Likes: {setLikes} </Button>  
            </form>
        </div> 
    );
    }

export default LikesBtn;