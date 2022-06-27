
const ImageInput = ({onChange, value}) => {

    const onFileUpload = (e) => {
        const file = e.target.files[0];
        if(file.size > (200*1024)){
            alert("Picture is too big. Acceptable file size 200Kb!!")
            return;
        }
        // base64
        const fileReader = new FileReader();

        fileReader.onload = () => {
            onChange(fileReader.result);
        }

        fileReader.readAsDataURL(file);

    }

    return <div className={"mb-2"}>
        {value ? <img alt="no pic" src={value} className={"mx-auto text-center max-w-md h-auto"}/> : null}
        <label className={"block"}>Image</label>
        <input type={"file"}  accept={"image/*"} onChange={onFileUpload}></input>
    </div>
}

export default ImageInput;

