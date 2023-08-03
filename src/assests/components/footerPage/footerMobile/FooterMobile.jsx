import './footerMobile.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../button/Button';
import Modal from '../../modal/Modal';

import Facebook from '../../../icons/facebook.svg';
import Twitter from '../../../icons/twitter.svg';
import Yotube from '../../../icons/youtube.svg';
import Instagram from '../../../icons/instagram.svg';
import Lnkdin from '../../../icons/lnkdn.svg';

function FooterMobile({ onOpen, color }) {

    const [t] = useTranslation(["translation"]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<>
        <footer>
            <img src="./image/main/logo.webp" alt="" />

            <div className='footer-accordion'>

                <section>
                    <input type="checkbox" className="accordion-checkbox" id="accordion-1" />
                    <label className="accordion-heading" htmlFor="accordion-1">{t('descriptionLast.buy.navTitle')}</label>
                    <div className="accordion-content">
                        <p>{t('descriptionLast.buy.nav1')}</p>
                        <p>{t('descriptionLast.buy.nav2')}</p>
                        <p>{t('descriptionLast.buy.nav3')}</p>
                        <p>{t('descriptionLast.buy.nav4')}</p>
                        <p>{t('descriptionLast.buy.nav5')}</p>
                        <p>{t('descriptionLast.buy.nav6')}</p>
                    </div>
                </section>

                <section>
                    <input type="checkbox" className="accordion-checkbox" id="accordion-2" />
                    <label className="accordion-heading" htmlFor="accordion-2">{t('descriptionLast.services.navTitle')}</label>
                    <div className="accordion-content">
                        <p>{t('descriptionLast.services.nav1')}</p>
                        <p>{t('descriptionLast.services.nav2')}</p>
                        <p>{t('descriptionLast.services.nav3')}</p>
                        <p>{t('descriptionLast.services.nav4')}</p>
                        <p>{t('descriptionLast.services.nav5')}</p>
                        <p>{t('descriptionLast.services.nav6')}</p>
                    </div>
                </section>

                <section>
                    <input type="checkbox" className="accordion-checkbox" id="accordion-3" />
                    <label className="accordion-heading" htmlFor="accordion-3">{t('descriptionLast.information.navTitle')}</label>
                    <div className="accordion-content">
                        <p>{t('descriptionLast.information.nav1')}</p>
                        <p>{t('descriptionLast.information.nav2')}</p>
                        <p>{t('descriptionLast.information.nav3')}</p>
                        <p>{t('descriptionLast.information.nav4')}</p>
                        <p>{t('descriptionLast.information.nav5')}</p>
                        <p>{t('descriptionLast.information.nav6')}</p>
                    </div>
                </section>

                <section>
                    <input type="checkbox" className="accordion-checkbox" id="accordion-4" />
                    <label className="accordion-heading" htmlFor="accordion-4">{t('descriptionLast.aboutCompany.navTitle')}</label>
                    <div className="accordion-content">
                        <p>{t('descriptionLast.aboutCompany.nav1')}</p>
                        <p>{t('descriptionLast.aboutCompany.nav2')}</p>
                        <p>{t('descriptionLast.aboutCompany.nav3')}</p>
                        <p>{t('descriptionLast.aboutCompany.nav4')}</p>
                        <p>{t('descriptionLast.aboutCompany.nav5')}</p>

                    </div>
                </section>

                <section className='lastNews'>
                    {/* <input type="checkbox" className="accordion-checkbox" id="accordion-heading-5" /> */}
                    <label className="footer-heading" htmlFor="accordion-5">{t('descriptionLast.contact.navTitle')}</label>
                    <div className="wrapper-content">
                    <div className="footer-content">
                        <p>{t('descriptionLast.contact.nav1')}</p>
                        <p className='footer-email'>{t('descriptionLast.contact.nav2')}</p>                       
                    </div> 
                    <Button color="little-btn"
                            title='Book a consultation'
                            onClick={() => setIsModalOpen(true)}
                        />                    
                    </div>
                </section>
               
            </div>

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
    </>)
}

export default FooterMobile;

