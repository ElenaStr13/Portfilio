import './footerMain.scss';
import { useState } from 'react';
import Button from '../../button/Button';
import Modal from '../../modal/Modal';
import { useTranslation } from 'react-i18next';
//import {useMedia} from 'use-media';

import Facebook from '../../../icons/facebook.svg';
import Twitter from '../../../icons/twitter.svg';
import Yotube from '../../../icons/youtube.svg';
import Instagram from '../../../icons/instagram.svg';
import Lnkdin from '../../../icons/lnkdn.svg';

function FooterMain({ onOpen }) {

    const [t] = useTranslation(["translation"]);
    const [isModalOpen, setIsModalOpen] = useState(false);    

    return (
        <footer>
            <img src="./image/main/logo.webp" alt="" />
            <section className='footer'>

                <div className='section'>
                    
                    <div className='accordion-heading'>{t('descriptionLast.buy.navTitle')}</div>
                    <ul className='accordion-content'>
                        <li>{t('descriptionLast.buy.nav1')}</li>
                        <li>{t('descriptionLast.buy.nav2')}</li>
                        <li>{t('descriptionLast.buy.nav3')}</li>
                        <li>{t('descriptionLast.buy.nav4')}</li>
                        <li>{t('descriptionLast.buy.nav5')}</li>
                        <li>{t('descriptionLast.buy.nav6')}</li>
                    </ul>
                </div>

                <div className='section'>
                    
                    <div className='accordion-heading'>{t('descriptionLast.services.navTitle')}</div>
                    <ul className='accordion-content'>
                        <li>{t('descriptionLast.services.nav1')}</li>
                        <li>{t('descriptionLast.services.nav2')}</li>
                        <li>{t('descriptionLast.services.nav3')}</li>
                        <li>{t('descriptionLast.services.nav4')}</li>
                        <li>{t('descriptionLast.services.nav5')}</li>
                        <li>{t('descriptionLast.services.nav6')}</li>
                    </ul>
                </div>

                <div className='section'>
                    
                    <div className='accordion-heading'>{t('descriptionLast.information.navTitle')}</div>
                    <ul className='accordion-content'>
                        <li>{t('descriptionLast.information.nav1')}</li>
                        <li>{t('descriptionLast.information.nav2')}</li>
                        <li>{t('descriptionLast.information.nav3')}</li>
                        <li>{t('descriptionLast.information.nav4')}</li>
                        <li>{t('descriptionLast.information.nav5')}</li>
                        <li>{t('descriptionLast.information.nav6')}</li>
                    </ul>
                </div>

                <div className='section'>
                   
                    <div className='accordion-heading'>{t('descriptionLast.aboutCompany.navTitle')}</div>
                    <ul className='accordion-content'>
                        <li>{t('descriptionLast.aboutCompany.nav1')}</li>
                        <li>{t('descriptionLast.aboutCompany.nav2')}</li>
                        <li>{t('descriptionLast.aboutCompany.nav3')}</li>
                        <li>{t('descriptionLast.aboutCompany.nav4')}</li>
                        <li>{t('descriptionLast.aboutCompany.nav5')}</li>
                    </ul>
                </div>

                <div className='section'>
                   
                    <div className='accordion-heading'>{t('descriptionLast.contact.navTitle')}</div>
                    <ul className='accordion-content footer-contact'>
                        <li>{t('descriptionLast.contact.nav1')}</li>
                        <li className='footer-email'>{t('descriptionLast.contact.nav2')}</li>
                        <Button
                            title='Book a consultation'
                            onClick={() => setIsModalOpen(true)}
                        />
                    </ul>
                </div>

            </section>
            {isModalOpen && <Modal
                className={isModalOpen ? 'open' : 'close'}
                onClose={() => setIsModalOpen(false)}
                onOpen={onOpen}
            >
            </Modal>
            }
            <div className='source'>
                <p>Copyright © 2023 Dubai Realty</p>
                <div className='footer-icons'>
          <a href="https://uk-ua.facebook.com/"><img src={Facebook} alt="Facebook" className="icon" /></a>
          <a href="https://twitter.com/?lang=ua"><img src={Twitter} alt="Twitter" className="icon" /></a>
          <a href="https://www.youtube.com/"><img src={Yotube} alt="Yotube" className="icon" /></a>
          <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" className="icon" /></a>          
          <a href="https://www.linkedin.com/"><img src={Lnkdin} alt="Lnkdin" className="icon" /></a>          
        </div>
                </div>
        </footer>
    );
}

export default FooterMain;