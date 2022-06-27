

const ImageOutput = ({value}) => {

    return <div className={"mb-2"}>
        {value ? <img alt="no pic" src={value} className={"mx-auto text-center max-w-md h-auto"}/> : null}
    </div>

}

export default ImageOutput;