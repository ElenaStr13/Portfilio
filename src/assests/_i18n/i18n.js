import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";

const languages = ["EN", "UA"];

i18n
  // detect user language 
  .use(Backend)
  // detect user language 
  .use(LanguageDetector)
  //pass the i18n instance to react-i18next.    
  .use(initReactI18next)
  //init i18next
  //for all options read: https://www.i18next.com/overview/configuration-options    
  .init({
    lng: "en",
    fallbackLng: "ua", // use et if detected lng is not available
    saveMissing: true, // send not translated keys to endpoint
    debug: true,
    whitelist: languages,
    react: {
      useSuspense: true
    }
  });  

export default i18n;