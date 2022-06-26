import MapWrapper from "../components/MapWrapper";
import {useSelector} from "react-redux";
import {selectAll} from "../store/reducer";
import {useNavigate} from "react-router";

function HomePage(){
    const posts = useSelector(selectAll());
    const navigate = useNavigate();
    const onPostClick = (post) => {
        navigate(`/view/${post.id}`);
    }

    return(
            <MapWrapper markers={posts} onMarkerClick={onPostClick}/>

    );
}

export default HomePage;