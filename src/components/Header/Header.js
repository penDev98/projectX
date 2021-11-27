import './Header.scss'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-logo">Logo Name</div>
                <div className="header-content">
                    <button className="header-home">Home</button>
                    <button className="header-services">Services</button>
                    <button className="header-projects">Projects</button>
                    <button className="header-contacts">Contacts</button>
                    <button className="header-blog">Blog</button>
                </div>
            </div>
        </>
    )
}

export default Header