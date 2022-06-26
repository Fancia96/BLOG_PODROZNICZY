import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectId} from "../store/reducer";
import MapWrapper from "../components/MapWrapper";

function Post({match}){
    const {id} = useParams();
    const post = useSelector(selectId(id))


    console.log(post)
    return(<div className={"text-center"}>
            <h1 className={"text-5xl mb-10"}>{post.title}</h1>
            <div className={"mb-2"}>
                {post.image ? <img src={post.image} className={"mx-auto text-center max-w-md h-auto"}/> : null}
            </div>
            <h2>{post.content}</h2>
            <MapWrapper markers={[post]}/>
        </div>
    );
}

export default Post;