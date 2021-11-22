const Button = ({ icon, viewType, activeView, onClick }) => {
    return (
        <button type="button" className={
            viewType === activeView ? "btn btn-primary" : "btn btn-outline-primary"
        } onClick={() => onClick()}>
            <i className={icon}></i>
        </button>
    )
}

export default Button