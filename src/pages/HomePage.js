import MapWrapper from "../components/MapWrapper";
import {useSelector} from "react-redux";
import {selectAll} from "../store/reducer";
import {useNavigate} from "react-router";
import {FiHeart} from "react-icons/fi";
import {useEffect, useState} from "react";

function HomePage(){
    const posts = useSelector(selectAll());
    const navigate = useNavigate();
    const onPostClick = (post) => {
        navigate(`/view/${post.id}`);
    }

    const [zoom, setZoom] = useState((6.8*window.innerHeight)/980);

    useEffect(() => {
        window.onresize = () => {
            setZoom((6.8*window.innerHeight)/980)
        }
    }, [])

    console.log(window.innerHeight)
    return(
        <div className={"text-center block"}>
            <MapWrapper style={{height: "80vh"}} markers={posts} onMarkerClick={onPostClick} zoom={zoom}/>
            <div style={{height: "20vh"}} className={"text-center mt-5"}>
                Hello! Here I gather my all travel history, share my thoughts with you, reader.
                <br/>I hope you will enjoy my blog about visitng country called POLAND!!!!
                <br/><FiHeart className={"align-middle text-center inline-flex"}/>
            </div>

        </div>

    );
}

export default HomePage;