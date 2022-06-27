import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectId} from "../store/reducer";
import MapWrapper from "../components/MapWrapper";
import TitleOutput from "../components/TitleOutput";
import ImageOutput from "../components/ImageOutput";
import DateOutput from "../components/DateOutput";
import ContentOutput from "../components/ContentOutput";

function Post(){
    const {id} = useParams();
    const post = useSelector(selectId(id))

    //console.log(post)
    return(
        <div className={"text-center"}>
            <TitleOutput value={post.title}/>
            <ImageOutput value={post.image}/>
            <DateOutput value={post.date}/>
            <ContentOutput value={post.content}/>
            <MapWrapper markers={[post]}/>
        </div>
    );
}

export default Post;