import {useParams, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addPost, selectId, updatePost} from "../store/reducer";
import {FiSave} from "react-icons/fi";
import MapWrapper from "../components/MapWrapper";
import TitleInput from "../components/TitleInput";
import ImageInput from "../components/ImageInput";
import DateInput from "../components/DateInput";
import ContentInput from "../components/ContentInput";

function PostEdit(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const post = useSelector(selectId(id));

    const[title, setTitle] = useState(post?.title || '')
    const[content, setContent] = useState(post?.content || '')
    const[position, setPosition] = useState(post ? post?.position : null)
    const[image, setImage] = useState(post?.image || '')
    const[date, setDate] = useState(post?.date || '')

    const onSave = (e) => {
        e.preventDefault()
        const data = {
            title,
            content,
            position,
            image,
            date
        }

        for(let prop in data){
            if(!data[prop]){
                alert('please fill ' + prop)
                return false;
            }
        }

        if(post){
            dispatch(updatePost({id, ...data}))
            navigate('/posts', {replace: true});
        } else{
            dispatch(addPost(data))
            navigate('/', {replace: true});
        }
    }

    const onMapClick = (e) => {
        let latlng = e.latLng.toJSON();
        setPosition({lat: latlng.lat, lng: latlng.lng})
    }

    return(
        <div className={""}>
            <form onSubmit={onSave}>
                <TitleInput onChange={setTitle} value={title}/>
                <ImageInput onChange={setImage} value={image}/>

                <DateInput onChange={setDate} value={date}/>

                <ContentInput onChange={setContent} value={content}/>
                <div>
                    <MapWrapper markers={position ? [{id:0, position: position}] : []} onMapClick={onMapClick}/>
                <button type={"submit"} className={"border rounded px-5 py-2"}><FiSave/></button>
                </div>
            </form>
        </div>
    );
}

export default PostEdit;