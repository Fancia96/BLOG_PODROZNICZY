
const TitleInput = ({onChange, value}) => {

    return <div>
        <label className={"block"}>Title</label>
        <input className={"border w-full text-center"} type={"text"}
               onChange={(e) => onChange(e.target.value)} value={value} />

    </div>
}

export default TitleInput;