import './header.scss';
import { useState } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import i18n from '../../_i18n/i18n';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [t] = useTranslation(["translation"]);
  const [drop, setDrop] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isActiveEn, setisActiveEn] = useState(true);
  const [isActiveUa, setisActiveUa] = useState(false);

const OnClosing = () => {
  setIsModalOpen(false);
  
}
  const showDropdown = () => {
    setDrop(true);
  }

  const hiddenDropdown = () => {
    setDrop(false);
  }

  const chngLanguageEn = () => {
    i18n.changeLanguage("en");
    setisActiveEn(true)
    setisActiveUa(false)
  }

  const chngLanguageUa = () => {
    i18n.changeLanguage("ua");
    setisActiveUa(true)
    setisActiveEn(false)
  }  

  return (<>
    <header className='header'>
      <div className='leftPart-menu'>
        <img src="./image/main/logo.webp" alt=""/>
        <nav className= {menuActive ? 'active menu': 'menu'} onClick={() => setMenuActive(false)}>
          <div  className = 'menu-content'onClick={e => e.stopPropagation()}>
            <Dropdown >
              <Dropdown.Toggle className='dropDown' id="dropdown-basic" onMouseEnter={showDropdown} onMouseLeave={hiddenDropdown}>
                <li><NavLink className={({ isActive }) => isActive ? "menu-active" : "nav"} to="/">{t('description.menu.menuNav1', { returnObjects: true })}</NavLink></li>
              </Dropdown.Toggle>
              {drop ? (<Dropdown.Menu className='dropdown-items' onMouseEnter={showDropdown}>
                <Dropdown.Item className='dropdown-item' href="/">{t('description.menu.navBuy.numberOne')}</Dropdown.Item>
                <Dropdown.Item className='dropdown-item' href="/category">{t('description.menu.navBuy.numberCategory')}</Dropdown.Item>
                <Dropdown.Item className='dropdown-item' href="/">{t('description.menu.navBuy.numberTwenty')}</Dropdown.Item>
              </Dropdown.Menu>) : null}
            </Dropdown>
            <li><NavLink className={({ isActive }) => isActive ? "menu-active" : "nav"} to="/blog">{t('description.menu.menuNav2', { returnObjects: true })}</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "menu-active" : "nav"} to="/services">{t('description.menu.menuNav3', { returnObjects: true })}</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "menu-active" : "nav"} to="/contact">{t('description.menu.menuNav4', { returnObjects: true })}</NavLink></li>
            <div className='for-mobile'>
        <Button color='btn-header'
          title='Book a consultation'
          onClick={() => setIsModalOpen(true)}
        />
         <a href="tel:+3099111111">+3 (099) 111-11-11</a>
         <div className='language'>
          <button onClick={chngLanguageEn} className={isActiveEn ? "active-lng" : ""}>EN</button>
          <button onClick={chngLanguageUa} className={isActiveUa ? "active-lng" : ""}>UA</button>
        </div>
        </div>
          </div>
        </nav>
       
      </div>
      <div className='rightPart-menu'>
        <Button color='btn-header'
          title='Book a consultation'
          onClick={() => setIsModalOpen(true)}
        />
        <div className='language'>
          <button onClick={chngLanguageEn} className={isActiveEn ? "active-lng" : ""}>EN</button>
          <button onClick={chngLanguageUa} className={isActiveUa ? "active-lng" : ""}>UA</button>
        </div>
        <a href="tel:+3099111111">+3 (099) 111-11-11</a>
        <nav className='burger-menu'>
  <div className={menuActive ? 'active-burger burger-btn': 'burger-btn'} onClick = {() => setMenuActive(!menuActive)}>
    <span></span>
  </div>
</nav>
      </div>
    </header>
    {isModalOpen && <Modal
      className={isModalOpen ? 'open' : 'close'}
      onClose={OnClosing}     
      isOpen={isModalOpen}
    >
    </Modal>
    }
  </>
  );
}

export default Header;                                            