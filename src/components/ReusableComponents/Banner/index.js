import React from 'react';
import Article from '../Article';;
import './style.scss';

const Banner = ({ articles }) => {
    return (
        <section className="article-flex">
            {articles.map(article => <Article key={article.id} {...article} />)}
        </section>
    );
};

export default Banner;