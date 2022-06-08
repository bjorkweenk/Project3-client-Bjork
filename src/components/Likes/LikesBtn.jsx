import { React, useState, useEffect, useContext } from "react";
import StoresService from "../../services/store.service.js"
import "./LikesBtn.css";


export default function LikesBtn ({store}) {
  const [likes, setLikes] = useState(null);

  useEffect(() =>{
    setLikes(store.storeLikes)
  }, [])

  const handleOnChange= (e) => {
    e.preventDefault();

    StoresService.getStoresLiked(store._id)
    .then((response) => {
      setLikes(response.data)
    })

  }

  return(
    <>
    <div>
      <p>{likes} Likes </p>
      <div className="div-btn">
        <button className="heartbutton" onClick={handleOnChange}>
          <div>
            <img
              src="https://pngroyale.com/wp-content/uploads/2021/11/Download-emoji-heart-.png"
              style= {{"width":"30px"}} alt= "like button" value= {store.storeLikes}
            />
          </div>
        </button>
      </div>
      </div>
    </>

  )
}

/* 

  handleOnChange = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="div-btn">
        <button className="heartbutton" onClick={this.handleOnChange}>
          <div>
            {" "}
            <img
              src="https://pngroyale.com/wp-content/uploads/2021/11/Download-emoji-heart-.png"
              width={20}
            />{" "}
            {this.state.count}
          </div>{" "}
        </button>
      </div>
    );
  }
 */


