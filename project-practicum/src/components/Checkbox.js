const CheckBox = ({ label, onChange }) => {
    return (
        <>
            <input className="form-check-input checkbox" type="checkbox" onChange={() => onChange()}></input>
            <label className="form-check-label" htmlFor="nameSort">{label}</label>
        </>
    )
}
export default CheckBox