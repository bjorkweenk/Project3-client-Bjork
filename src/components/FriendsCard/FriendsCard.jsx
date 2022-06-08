import "./FriendsCardStyle.css";
import { React, useContext,} from "react";
import { AuthContext } from "../../context/auth.context.js";
import FollowBtn from "../FollowBtn/FollowBtn";

const FriendsCard = ({ friend, addFriends, setFollowing }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="friendsCard">
      <img class="imagefriends" src={friend.userImg}  />
      <div>

        <a class="textA" href={`/profile/${friend._id}`}>
          <h4 class="textA">{friend.username}</h4>
        </a>

        <div>
      <p className="friendTagline"> {friend.tagLine}</p>
      </div>

        <div className="buttonFollow">
          <FollowBtn
            friend={friend}
            addFriends={addFriends}
            setFollowing={setFollowing}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
