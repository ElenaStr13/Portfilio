import Form from '../form/Form';
import { useTranslation } from 'react-i18next';
import "./contactPage.scss";
import Map from '../map/Map'; 

function ContactPage() {

  const [t] = useTranslation(["translation"]);

  return (< >
     <Map/>
   
    <div className='contactMap'>
      <div className='titleContact'>
        <span>{t('descriptionContact.contactTitlePastOne')}</span>
        <span>{t('descriptionContact.contactTitlePastTwo')}</span>
      </div>
      <div className='contactText'>
        <div>{t('descriptionContact.adress')}</div>
        <div>{t('descriptionContact.phone')}</div>
        <span>{t('descriptionContact.emailTitle')}</span>
        <span>{t('descriptionContact.email')}</span>
        <div>{t('descriptionContact.follow')}</div>
        <span>{t('descriptionContact.toWork')}</span>
        <span>{t('descriptionContact.workHours')}</span>
      </div>
    </div>
    <Form />

  </>
  );
}

export default ContactPage;