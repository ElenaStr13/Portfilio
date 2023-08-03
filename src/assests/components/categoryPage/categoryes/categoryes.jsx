import Offer from '../offer/offer';
import Category from '../category/category';
import ContactUs from '../../contactUs/contactUs';
import './categoryes.scss';
import { useTranslation } from 'react-i18next';

function Categoryes() {

  const [t] = useTranslation(["translation"]);

  return (< >
    <section className="pageCategory">
      <div className='category-picture'>
        <ul className='title-category'>
          <li>{t('descriptionCategory.title', { returnObjects: true })}</li>
          <li>{t('descriptionCategory.titleText', { returnObjects: true })}</li>
        </ul>
      </div>
      <h2>{t('descriptionCategory.titleApartments', { returnObjects: true })}</h2>
      <h2>{t('descriptionCategory.category', { returnObjects: true })}</h2>

      {/* Category apartments */}
      <Category />

      <Offer />

      <div className='about-apartments'>
        <h3>{t('descriptionCategory.apartments', { returnObjects: true })}</h3>
        <span>{t('descriptionCategory.apartmentsText', { returnObjects: true })}</span>
        <h3>{t('descriptionCategory.everything', { returnObjects: true })}</h3>
        <span>{t('descriptionCategory.everythingText', { returnObjects: true })}</span>
      </div>
      <ContactUs />
    </section>
  </>
  );
}

export default Categoryes;