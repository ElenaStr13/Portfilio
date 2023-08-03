import React from 'react';
import './blog.scss';
import { useTranslation } from 'react-i18next';

function Blog() {

    const [t] = useTranslation(["translation"]);

    return <>
        <wrapper className="blogs">
            {t("descriptionBlog.blog", { returnObjects: true }).map((el, index) => (
                <div className="blog" key={index}>
                    <img src={el.image} alt="photo" />
                    <div className='textBlog'>
                        <p className='blog-title-little'>{el.title}</p>
                        <p className='blog-text'>{el.text}</p>
                        <a href="#">{el.learn}</a>
                    </div>
                </div>
            ))}
        </wrapper>
    </>
}

export default Blog;