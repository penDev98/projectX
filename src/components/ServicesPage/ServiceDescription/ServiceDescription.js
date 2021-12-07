import './ServiceDescription.scss'

function ServiceDescription() {
    return (
        <>
        <div className="what-we-do-section">
            <h2>WHAT WE DO</h2>
            <section className='descriptions'>
                <article className="service web">
                    <h2>WEB DEVELOPMENT</h2>
                </article>
                <article className="service design">
                    <p className="actual-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae itaque at obcaecati temporibus iusto labore, neque voluptatibus ducimus dolore.
                    </p>
                    <button className="read-more">READ MORE</button>
                </article>
                <article className="service mobile">
                    <h2>MOBILE DEVELOPMENT</h2>
                </article>
            </section>
        </div>
        </>
    );
}

export default ServiceDescription;