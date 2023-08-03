import './propose.scss';
import { useTranslation } from 'react-i18next';

function Propose() {

    const [t] = useTranslation(["translation"]);

    return <>

<section className='proposes-all'>
            <div className='title-propose'>
                <span >{t('descriptionServices.propose.titlePropose')}</span>
                <button>{t('descriptionServices.propose.viewAll')}</button>
            </div>
        <div className='proposes'>
                <div className='one-propose'>
                    <div className='front-propose'>
                    <span >{t('descriptionServices.propose.title')}</span>
                    <img className= 'img-card' src="./image/services/propose1.webp" alt="propose1" />
                    </div>                    

                    <div className='back-propose'>                        
                        <div className='propose-title'>{t('descriptionServices.propose.title')}</div>
                        <p>{t('description.articles.textArticle')}</p>
                        <a href='#'>{t('description.articles.learnMore')}</a>
                    </div>
                </div>

                <div className='two-propose'>
                <div className='front-propose'>
                    <span >{t('descriptionServices.propose.title')}</span>
                    <img className= 'img-card' src="./image/services/propose1.webp" alt="propose1" />
                    </div>

                    <div className='back-propose'>                        
                        <div className='propose-title'>{t('descriptionServices.propose.title')}</div>
                        <p>{t('description.articles.textArticle')}</p>
                        <a href='#'>{t('description.articles.learnMore')}</a>
                    </div>
                </div>

                <div className='three-propose'>
                <div className='front-propose'>
                    <span >{t('descriptionServices.propose.title')}</span>
                    <img className= 'img-card' src="./image/services/propose2.webp" alt="propose2" />
                    </div>

                    <div className='back-propose'>                        
                        <div className='propose-title'>{t('descriptionServices.propose.title')}</div>
                        <p>{t('description.articles.textArticle')}</p>
                        <a href='#'>{t('description.articles.learnMore')}</a>
                    </div>
                </div>
            </div>
            </section>
    </>
}

export default Propose;