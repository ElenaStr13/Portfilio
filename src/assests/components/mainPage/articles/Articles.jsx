import './articles.scss';
import { useTranslation } from 'react-i18next';

function Articles() {

    const [t] = useTranslation(["translation"]);

    return (
        <section className='articles'>
            <div className='title-article'>
                <span >{t('description.articles.menuTitle')}</span>
                <button>{t('description.articles.btnArticle')}</button>
            </div>

            <div className='cards'>
                <div className='one-card'>
                    <div className='front-card'>
                    <span>{t('description.articles.nameArticle')}</span>
                    <img className= 'img-card' src="./image/main/usefullArticle1.webp" alt="Article1" />
                    </div>                    

                    <div className='back-card'>
                        <span className='card-date'>{t('description.articles.dateArticle')}</span>
                        <div className='card-title'>{t('description.articles.nameArticle')}</div>
                        <p>{t('description.articles.textArticle')}</p>
                        <a href='#'>{t('description.articles.learnMore')}</a>
                    </div>
                </div>

                <div className='two-card'>
                <div className='front-card'>
                    <span className='front-card'>{t('description.articles.nameArticle')}</span>
                    <img className= 'img-card' src="./image/main/usefullArticle1.webp" alt="Article1" />
                    </div>

                    <div className='back-card'>
                        <span className='card-date'>{t('description.articles.dateArticle')}</span>
                        <div className='card-title'>{t('description.articles.nameArticle')}</div>
                        <p>{t('description.articles.textArticle')}</p>
                        <a href='#'>{t('description.articles.learnMore')}</a>
                    </div>
                </div>

                <div className='three-card'>
                <div className='front-card'>
                    <span className='front-card'>{t('description.articles.nameArticle')}</span>
                    <img className= 'img-card' src="./image/main/usefullArticle2.webp" alt="Article2" />
                    </div>

                    <div className='back-card'>
                        <span className='card-date'>{t('description.articles.dateArticle')}</span>
                        <div className='card-title'>{t('description.articles.nameArticle')}</div>
                        <p>{t('description.articles.textArticle')}</p>
                        <a href='#'>{t('description.articles.learnMore')}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles;