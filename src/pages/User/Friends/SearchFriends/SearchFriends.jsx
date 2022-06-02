import { Row, Col } from "react-bootstrap"
import FriendsCard from "../FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"

const SearchFriends= ({ user }) => {

    const [searchBarData, setSearchBarData] = useState("");

    const handleSearch = (e) => {
       let value = e.target.value;
       setSearchBarData(value);
    }

    return (
        user.length
            ?
            <Row>
                {
                    user.map(friend => {
                        return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard {...friend} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default SearchFriends