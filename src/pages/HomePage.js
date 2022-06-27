import MapWrapper from "../components/MapWrapper";
import {useSelector} from "react-redux";
import {selectAll} from "../store/reducer";
import {useNavigate} from "react-router";
import {FiHeart} from "react-icons/fi";

function HomePage(){
    const posts = useSelector(selectAll());
    const navigate = useNavigate();
    const onPostClick = (post) => {
        navigate(`/view/${post.id}`);
    }

    return(
        <div className={"text-center block"}>
            <MapWrapper markers={posts} onMarkerClick={onPostClick}/>
            <div className={"text-center mt-5"}>
                Hello! Here I gather my all travel history, share my thoughts with you, reader.
                <br/>I hope you will enjoy my blog about visitng country called POLAND!!!!
                <br/><FiHeart className={"align-middle text-center inline-flex"}/>
            </div>

        </div>

    );
}

export default HomePage;