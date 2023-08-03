import './App.scss';
import Main from './assests/components/mainPage/main/Main';
import Blogs from './assests/components/blogPage/blogs/Blogs';
import ServicesPage from './assests/components/Sirveces/servicesPage/servicesPage';
import ContactPage from './assests/components/contactPage/ContactPage/ContactPage';
import Categoryes from './assests/components/categoryPage/categoryes/categoryes';
import Header from '../src/assests/components/header/Header';
import Footer from '../src/assests/components/footerPage/footer/Footer';
import { useTranslation } from 'react-i18next';
import i18n from './assests/_i18n/i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import ScrollToTop from './assests/hooks/ScrollToTop';
//import i18n from './assests/_i18n/i18n';
//import Modal from './assests/components/modal/Modal';
//import Button from './assests/components/button/Button';

function App() {

  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [t] = useTranslation(["translation"]);

  return (<>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <BrowserRouter>
        <Header>

        </Header>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/category' element={<Categoryes />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </I18nextProvider>

  </>);
}

export default App;
