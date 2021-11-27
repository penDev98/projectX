import './Team.scss'

function Team() {
    return (
        <>
            <div className="team-component">
                <h2>OUR TEAM</h2>
                <ul className="team-members">
                    <li>
                        <p className="position">SOFTWARE DEVELOPER</p>
                        <p className="photo"></p>
                        <p className="name">Kerim Pendev</p>
                    </li>
                    <li>
                        <p className="position">SOFTWARE DEVELOPER</p>
                        <p className="photo"></p>
                        <p className="name">Kerim Nizamov</p>
                    </li>
                    <li>
                        <p className="position">GRAPHIC DESIGNER & <br/> SOFTWARE DEVELOPER</p>
                        <p className="photo"></p>
                        <p className="name">Fammy Pendeva</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Team;