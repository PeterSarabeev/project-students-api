import React from "react"


const Button = ({ buttons, onClick, getIndex }) => {
    return (
        <>
            {
                buttons.map(button =>
                    <React.Fragment key={buttons.indexOf(button)}>
                        <button type="button" className={
                            button.isActive ? "btn btn-primary" : "btn btn-outline-primary"
                        } onClick={() => onClick()}>
                            <i className={button.icon}></i>
                        </button>
                    </React.Fragment>
                )
            }
        </>
    )
}

export default Button