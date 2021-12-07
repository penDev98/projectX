import './ProjectPage.scss'

function ProjectPage() {
    return (
        <>
            <section className="project-page-wrapper">
                <article className='main-img'>
                    <img />
                </article>
                <div className="project-layout">
                    <h2 className='project-layout-title'>OUR PROJECTS</h2>
                    <article className='grid-wrapper'>
                        <div className='first-section'>
                            <div className='grid left'><h2>ALSO PROJECT</h2></div>
                            <div className='grid mid'>
                                <div className='grid mid-up'><h2>PROJECT ONE</h2></div>
                                <div className='grid mid-down'><h2>PROJECT TWO</h2></div>
                            </div>
                            <div className='grid right'>
                                <div className='grid right-up'><h2>ANOTHER PROJECT</h2></div>
                                <div className='grid right-down'><h2>COMING SOON</h2></div>
                            </div>
                        </div>
                        <div className='grid second-section'><h2>AND ANOTHER ONE</h2></div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default ProjectPage;