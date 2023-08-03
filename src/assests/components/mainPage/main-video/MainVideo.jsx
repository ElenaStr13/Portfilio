import './mainVideo.scss';
import { useTranslation } from 'react-i18next';
import ContactUs from '../../contactUs/contactUs';


function MainVideo() {

  const [t] = useTranslation(["translation"]);

  return (
    <section className='main-video'>      
      <div className='expertise'>{t('description.mainVideo.expertise')}</div>
      <div className='title-expertise'>{t('description.mainVideo.titleExpertise')}</div>
      <div className='text-expertise'>{t('description.mainVideo.text')}</div>
         <img className='video' src="./image/main/video section.webp" alt="video" />
         <div className='text-frame'>“{t('description.mainVideo.textFrame')}” <span>— {t('description.mainVideo.frameAuthor')}</span></div>
            <div className='placeholder'>
            <span>
                <img src="./image/main/placeholder1.webp" alt="place" />
                <p>{t('description.mainVideo.text1')}</p>
                
            </span>
            <span>
                <img src="./image/main/placeholder.webp" alt="place" />
                <p>{t('description.mainVideo.text2')}</p>                
            </span>
            </div>           
            <ContactUs />
    </section>
    
  );
}

export default MainVideo;