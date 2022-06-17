import "./FriendsCardStyle.css";
import React, { useContext,} from "react";
import { AuthContext } from "../../context/auth.context.js";
import FollowBtn from "../FollowBtn/FollowBtn";

const FriendsCard = ({ friend, addFriends, setFollowing, search, setSearch, deleteSearch, deleteFriends}) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="friendsCard">
      <img className="imagefriends" src={friend.userImg}  />
      <div>

        <a className="textA" href={`/profile/${friend._id}`}>
          <h4 className="textA">{friend.username}</h4>
        </a>

        <div className="friendTagline">
      <p> {friend.tagLine}..</p>
      </div>

        <div className="buttonFollow">
          <FollowBtn search={search} setSearch={setSearch}
            friend={friend}
            addFriends={addFriends}
            setFollowing={setFollowing}
            deleteSearch={deleteSearch}
            deleteFriends={deleteFriends}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
