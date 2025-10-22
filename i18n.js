// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // ⬅️ ovo dodaje backend koji učitava JSON fajlove

i18n
  .use(HttpBackend) // ⬅️ MORA da postoji da bi mogao da čita iz /public/locales
  .use(initReactI18next)
  .init({
    fallbackLng: 'sr',
    lng: 'sr', // podrazumevani jezik
    debug: true,

    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // React već sam radi escape
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // ⬅️ putanja do fajlova u /public/locales
    },
  });

export default i18n;
