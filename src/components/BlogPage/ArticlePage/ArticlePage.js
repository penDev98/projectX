import './ArticlePage.scss'

function ArticlePage() {
    return (
        <>
            <section className='article-page-wrapper'>
                <h1>ARTICLE TITLE</h1>
                <article className='article-header-img'>
                    <img />
                </article>
                <article className='article-layout'>
                    <div className='first-section'>
                        <div className="author-info">
                            <h5>Author</h5>
                            <img />
                        </div>
                        <div className="paragraph-wrapper">
                            <h6>Lorem ipsum dolor sit amet</h6>
                            <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Posuere lorem ipsum dolor sit amet. Eget mauris pharetra et ultrices neque.
                            </p>
                        </div>
                    </div>
                    <div className='second-section'>
                        <div className="quote-wrapper">
                            <span>"</span>
                            <p>Magna eget est lorem ipsum. Accumsan lacus vel facilisis volutpat est velit egestas. Aliquam faucibus purus in massa tempor. Nam aliquam sem et tortor consequat id porta</p>
                        </div>
                        <img className="article-img" />
                    </div>
                    <div className="third-section">
                        <h6>In massa tempor nec feugiat nisl pretium fusce id</h6>
                        <p>Tristique senectus et netus et. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Neque laoreet suspendisse interdum consectetur libero. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Eu facilisis sed odio morbi quis. Dui ut ornare lectus sit amet. Proin libero nunc consequat interdum varius sit amet mattis. Aliquam id diam maecenas ultricies mi. Id cursus metus aliquam eleifend mi. Elementum pulvinar etiam non quam. Elementum tempus egestas sed sed risus.</p>
                        <h6>In massa tempor nec feugiat nisl pretium fusce id</h6>
                        <p>Tristique senectus et netus et. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Neque laoreet suspendisse interdum consectetur libero. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Eu facilisis sed odio morbi quis. Dui ut ornare lectus sit amet. Proin libero nunc consequat interdum varius sit amet mattis. Aliquam id diam maecenas ultricies mi. Id cursus metus aliquam eleifend mi. Elementum pulvinar etiam non quam. Elementum tempus egestas sed sed risus.</p>
                    </div>
                </article>
                <article className='other-suggestions'>
                    <h2>YOU MAY ALSO LIKE</h2>
                    <div className="suggestions-wrapper">
                        <div className="other-article-wrapper">
                            <img />
                            <h3>ARTICLE TITLE</h3>
                        </div>
                        <div className="other-article-wrapper">
                            <img />
                            <h3>ARTICLE TITLE</h3>
                        </div>
                        <div className="other-article-wrapper">
                            <img />
                            <h3>ARTICLE TITLE</h3>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ArticlePage