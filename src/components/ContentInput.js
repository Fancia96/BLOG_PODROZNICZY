

const ContentInput = ({onChange, value}) => {

    return <div>
        <label className={"block"}>Content</label>
        <textarea className={"border w-full  text-center"} style={{height: '70vh'}} onChange={(e) => onChange(e.target.value)} value={value}/>
    </div>
}

export default ContentInput;