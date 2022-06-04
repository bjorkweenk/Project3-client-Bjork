import "./LikesBtn.css";
import axios from "axios"
import { Button} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { useContext } from "react";
import { useState } from "react";
import React, { Component } from "react";

class LikesBtn extends Component {
  state = {
    count: 0
  };
  handleOnChange = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="div-btn">
         <button class="heartbutton" onClick={this.handleOnChange}><div>  <img src="https://pngroyale.com/wp-content/uploads/2021/11/Download-emoji-heart-.png" width={20} /> {this.state.count}</div> </button>
       
      </div>
    );
  }
}

export default LikesBtn;

/*  const LikesBtn = (props) => {

    const [likes, setLikes] = useState(0);
    // const [likedStores, setStoresLikes] = useState(null)

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
                <Button onClick={addLikes}> likes :{setLikes} 0</Button>  
            </form>
        </div> 
    );
    }  */

