
import './services.scss';
import Table from '../table/table';
import Propose from '../propose/Propose';
import { useTranslation } from 'react-i18next';
import ContactUs from '../../contactUs/contactUs';

function ServicesPage() {

  const [t] = useTranslation(["translation"]);

  return (< >
    <section className='services'>
      <img className='main-image' src="./image/services/main.webp" alt="main" />
      <ul className='services-title'>
        <li>{t('mainTitle.titlePastOne')}</li>
        <li className='services-big-title'>{t('mainTitle.titlePastTwo')}</li>
        <li className='services-yellow-title'>{t('mainTitle.titlePastThree')}</li>
      </ul>
      <div className='services-main-title'>{t('descriptionServices.rent')}</div>
      <div className='title-rent'>
        <p className='services-buying'>{t('descriptionServices.servicesBuying')}</p>
        <p >{t('descriptionServices.title-rent')}</p>
      </div>
      <ul className='rent'>
        <li>{t('descriptionServices.textRent1')}</li>
        <li>{t('descriptionServices.textRent2')}</li>
        <li>{t('descriptionServices.textRent3')}</li>
        <li>{t('descriptionServices.textRent4')}</li>
      </ul>
      <img className='view-image' src="./image/services/view.webp" alt="view" />
      <div className='method-services'>
        <p className='method-title'>{t('descriptionServices.method')}</p>
        <p className='method-text OnePart'>{t('descriptionServices.textMethod1')}</p>
        <p className='method-text'>{t('descriptionServices.textMethod2')}</p>
      </div>
      <div className='quote'>
        <div className='beans'>"</div>
        <ul className='quote-text'>
          <li>{t('descriptionServices.quote')}</li>
          <li>{t('descriptionServices.Author')}</li>
          <li className='author-position'>{t('descriptionServices.position')}</li>
        </ul>
      </div>
      <section className='images-all'>
        <div className='images-two'>
          <img src="./image/services/image1.webp" alt="image1" />
          <img src="./image/services/image2.webp" alt="image2" />
        </div>
        <img src="./image/services/image3.webp" alt="image3" />
      </section>
      <div className='achievement'>
        <div className='option'>
          <p>20</p>
          <p>{t('descriptionServices.achievement.years')}</p>
        </div>
        <div className='option'>
          <p>7</p>
          <p>{t('descriptionServices.achievement.managers')}</p>
        </div>
        <div className='option'>
          <p>100</p>
          <p>+</p>
          <p>{t('descriptionServices.achievement.projects')}</p>
        </div>
      </div>
      <div className='Challenge'>
        <ul>{t('descriptionServices.Challenge.title')}
          <li>{t('descriptionServices.Challenge.textchalange')}</li>
          <li className='location-services'>{t('descriptionServices.Challenge.location')}</li>
          <li className='textLocation'>{t('descriptionServices.Challenge.textLocation')}</li>
          <ul>
            <li>{t('descriptionServices.Challenge.textOne')}</li>
            <li>{t('descriptionServices.Challenge.textTwo')}</li>
            <li>{t('descriptionServices.Challenge.textThree')}</li>
            <li>{t('descriptionServices.Challenge.textFour')}</li>
          </ul>
        </ul>
      </div>
      < ContactUs />
      <Table />
      <Propose />
    </section>


  </>
  );
}

export default ServicesPage;