import {useParams, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addPost, selectId, updatePost} from "../store/reducer";
import {FiSave} from "react-icons/fi";
import MapWrapper from "../components/MapWrapper";

function PostEdit(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const post = useSelector(selectId(id));

    const[title, setTitle] = useState(post?.title || '')
    const[content, setContent] = useState(post?.content || '')
    const[position, setPosition] = useState(post ? post?.position : null)
    const[image, setImage] = useState(post?.image || '')

    const onSave = (e) => {
        e.preventDefault()
        const data = {
            title,
            content,
            position,
            image
        }

        if(post){
            dispatch(updatePost({id, ... data}))
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

    const onFileUpload = (e) => {
        const file = e.target.files[0];
        if(file.size > (200*1024)){
            alert("Picture is too big. Acceptable file size 200Kb!!")
            return;
        }
        // base64
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);

    }

    return(
        <div className={""}>
            <form onSubmit={onSave}>
                <label className={"block"}>Title</label>
                <input className={"border w-full text-center"} type={"text"} onChange={(e) => setTitle(e.target.value)} value={title}/>

                <div className={"mb-2"}>
                    {image ? <img src={image} className={"mx-auto text-center max-w-md h-auto"}/> : null}
                    <label className={"block"}>Image</label>
                    <input type={"file"}  accept={"image/*"} onChange={onFileUpload}></input>
                </div>

                <label className={"block"}>Content</label>
                <textarea className={"border w-full  text-center"} style={{height: '70vh'}} onChange={(e) => setContent(e.target.value)} value={content}/>

                <div>
                    <MapWrapper markers={position ? [{id:0, position: position}] : []} onMapClick={onMapClick}/>
                <button type={"submit"} className={"border rounded px-5 py-2"}><FiSave/></button>
                </div>
            </form>
        </div>
    );
}

export default PostEdit;