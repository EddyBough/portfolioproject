import { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import messages_fr from '../translations/fr.json';
import messages_en from '../translations/en.json';
import messages_ar from '../translations/ar.json';
import HomePage from "../pages/Homepage";


export const LanguageContext = createContext();


const messages = {
  fr: messages_fr,
  en: messages_en,
  ar: messages_ar,
};

function App() {
  const [locale, setLocale] = useState('fr');
  const value = { locale, setLocale };

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default App;





