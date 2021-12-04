import './ServiceDescription.scss'

function ServiceDescription() {
    return (
        <>
            <h3 className="title what">WHAT WE DO</h3>
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
        </>
    );
}

export default ServiceDescription;