const CheckBox = ({ label, onChange }) => {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input checkbox" type="checkbox" onChange={() => onChange()}></input>
                <label className="form-check-label" htmlFor="nameSort">{label}</label>
            </div>
        </>
    )
}
export default CheckBox