

const DateInput = ({onChange, value}) => {

    return <div>
        <label className={"block"}>Date</label>
        <input type={"date"} onChange={(e) => onChange(e.target.value)} value={value}></input>
    </div>
}

export default DateInput;