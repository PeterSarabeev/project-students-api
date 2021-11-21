const NavBar = () => {
    return (<div id="nav-bar">
        <span className="separator"></span>
        <a href="/" className="nav-button">Home</a>
        <span className="separator"></span>
        <a href="/users" className="nav-button">Students</a>
        <span className="separator"></span>
        <a href="/contacts" className="nav-button">Contacts</a>
        <span className="separator"></span>
    </div>
    )
}

export default NavBar