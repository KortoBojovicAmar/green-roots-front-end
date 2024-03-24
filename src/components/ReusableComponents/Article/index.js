import React from 'react';
import './style.scss';

const Article = ({ title, description, image, id }) => {
    // Détermine si l'id est pair ou impair
    const isEven = id % 2 === 0;
    console.log("id pair ?", isEven)
    return (
        <div className='articles'>
            <article className={`article ${isEven ? 'even' : 'odd'}`}>
                {/* Si l'index est pair, place l'image à droite */}
                {isEven ? (
                    <>
                        <div className="article_content">
                            <h2 className="article_title">{title}</h2>
                            <p className="article_desc">{description}</p>
                            <a className="article_action" href="#">Voir plus <span aria-hidden="true">→</span></a>
                        </div>
                        <img src={image} className='article_img' />
                    </>
                ) : (
                    // Si l'index est impair, place l'image à gauche (comme dans la structure initiale)
                    <>
                        <img src={image} className='article_img' />
                        <div className="article_content">
                            <h2 className="article_title">{title}</h2>
                            <p className="article_desc">{description}</p>
                            <a className="article_action" href="#">Voir plus <span aria-hidden="true">→</span></a>
                        </div>
                    </>
                )}
            </article>
        </div>
    );
};

export default Article;