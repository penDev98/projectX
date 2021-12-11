import { Link } from 'react-router-dom';
import './BlogPage.scss'

function BlogPage() {
    return (
        <>
            <article className='main-img'>
                <img />
            </article>
            <section className='page-wrapper'>
                <article className='title-wrapper'>
                    <h2>ARTICLES</h2>
                </article>
                <article className='articles-wrapper'>
                    <div className='single-article-wrapper'>
                        <img />
                        <Link to="/blog/article">
                            <h3>PATH TO ARTICLE PAGE</h3>
                        </Link>
                        
                    </div>
                    <div className='single-article-wrapper'>
                        <img />
                        <h3>TITLE</h3>
                    </div>
                    <div className='single-article-wrapper'>
                        <img />
                        <h3>TITLE</h3>
                    </div>
                    <div className='single-article-wrapper'>
                        <img />
                        <h3>TITLE</h3>
                    </div>
                    <div className='single-article-wrapper'>
                        <img />
                        <h3>TITLE</h3>
                    </div>
                    <div className='single-article-wrapper'>
                        <img />
                        <h3>TITLE</h3>
                    </div>
                </article>
                <article className='paginator-wrapper'>
                    <button className='btn-wrapper'>{'< Prev'}</button>
                    <button className='page-number-btn current'>1</button>
                    <button className='page-number-btn'>2</button>
                    <button className='page-number-btn'>3</button>
                    <button className='btn-wrapper'>{'Next >'}</button>
                </article>
            </section>
        </>
    );
}

export default BlogPage;