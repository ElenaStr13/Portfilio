import './main.scss';
import { useRef } from "react";
//import i18n from '../../../_i18n/i18n';
import { useTranslation } from 'react-i18next';
import LatestProjects from '../latestProjects/LatestProjects';
import MainVideo from '../main-video/MainVideo';
import Articles from '../articles/Articles';
import OwnerFounder from '../ownerFounder/OwnerFounder';
import Questions from '../questions/Questions';

import Facebook from '../../../icons/facebook.svg';
import Twitter from '../../../icons/twitter.svg';
import Yotube from '../../../icons/youtube.svg';
import Instagram from '../../../icons/instagram.svg';
import Lnkdin from '../../../icons/lnkdn.svg';

function Main() {

  const [t] = useTranslation(["translation"]);

  const urlTwoRef = useRef();
  const btnOneRef = useRef();
  const btnTwoRef = useRef();
  const btnThreeRef = useRef();
  //const [isClick, setIsClick] = useState(false)


  const ChangeImage = () => {
    urlTwoRef.current.style.backgroundImage = "url('./image/main/slider1.webp')";
  }
  const ChangeImage2 = () => {
    urlTwoRef.current.style.backgroundImage = "url('./image/main/slider2.webp')";
  }
  const ChangeImage3 = () => {
    urlTwoRef.current.style.backgroundImage = "url('./image/main/slider3.webp')";
  }

  return (< >
    <section className='main' >
      <div className='main-picture' ref={urlTwoRef}>
        <ul className='main-title'>
          <li>{t('description.mainTitle.textBefore', { returnObjects: true })}</li>
          <li className='big-title'>{t('description.mainTitle.titlepart1', { returnObjects: true })} <span>{t('description.mainTitle.titlepart2', { returnObjects: true })}</span> {t('description.mainTitle.titlepart3', { returnObjects: true })}</li>
          <li className='main-sources'>{t('description.mainTitle.bookToCons', { returnObjects: true })}</li>
        </ul>
        <div className='icons'>
          <a href="https://uk-ua.facebook.com/"><img src={Facebook} alt="Facebook" className="icon" /></a>
          <a href="https://twitter.com/?lang=ua"><img src={Twitter} alt="Twitter" className="icon" /></a>
          <a href="https://www.youtube.com/"><img src={Yotube} alt="Yotube" className="icon" /></a>
          <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" className="icon" /></a>          
          <a href="https://www.linkedin.com/"><img src={Lnkdin} alt="Lnkdin" className="icon" /></a>          
        </div>
        <div className='change-pictures'>
          <div className='change-mainPicture'>
            <button onClick={ChangeImage} className='change-numberPicture' ref={btnOneRef}>01</button>
            <div className='change-titlePicture'>
              <span>{t('description.mainCard.title', { returnObjects: true })}</span>
              <span>{t('description.mainCard.text', { returnObjects: true })}</span>
            </div>
          </div>
          <div className='change-mainPicture'>
            <button onClick={ChangeImage2} className='change-numberPicture' ref={btnTwoRef}>02</button>
            <div className='change-titlePicture'>
              <span>{t('description.mainCard.title', { returnObjects: true })} </span>
              <span>{t('description.mainCard.text', { returnObjects: true })}</span>
            </div>
          </div>
          <div className='change-mainPicture'>
            <button onClick={ChangeImage3} className='change-numberPicture' ref={btnThreeRef}>03</button>
            <div className='change-titlePicture'>
              <span>{t('description.mainCard.title', { returnObjects: true })} </span>
              <span>{t('description.mainCard.text', { returnObjects: true })}</span>
            </div>
          </div>
        </div>
      </div>
    </section >
    <LatestProjects />
    <MainVideo />
    <Articles />
    <OwnerFounder />
    <Questions />
  </>
  );
}

export default Main;

  // const ChangeImage = (ref) => {
  //   switch({ref}) {
  //     case 'btnOneRef':  
  //     console.log("btnOneRef")
  //       break;      
  //     case 'btnTwoRef': 
  //     console.log("btnTwoRef")
  //       break;
  //       case 'btnThreeRef': 
  //       console.log("btnThreeRef")
  //       break;
  //     default:         
  //       break;
  //   }

  //urlTwoRef.current.style.backgroundImage = "url('./image/main/slider2.webp')";    
  //}