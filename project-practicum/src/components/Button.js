const Button = ({ viewType, isActive, onClick }) => {
    return (
        <button type="button" className={
            isActive ? "btn btn-primary" : "btn btn-outline-primary"
        } onClick={() => onClick()}>
            <i className={viewType === "list" ? "fa fa-list" : "fa fa-table"}></i>
        </button>
    )
}

export default Button