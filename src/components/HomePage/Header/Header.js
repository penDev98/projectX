import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-logo">Logo Name</div>
                <div className="header-content">
                    <Link to="/"><button className="header-home">Home</button></Link>
                    <Link to="/services"><button className="header-services">Services</button></Link>
                    <Link to="/projects"><button className="header-projects">Projects</button></Link>
                    <Link to="/contacts"><button className="header-contacts">Contacts</button></Link>
                    <Link to="/blog"><button className="header-blog">Blog</button></Link>
                </div>
            </div>
        </>
    )
}

export default Header