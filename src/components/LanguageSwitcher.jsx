import { useContext } from "react";
import { LanguageContext } from "../App"; // Assurez-vous que le chemin d'accès est correct

function LanguageSwitcher() {
  const { setLocale } = useContext(LanguageContext);
  
  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <div className='flex md:flex-row lg:flex-row md:justify-end space-x-4'>
      <button onClick={() => switchLanguage('fr')}><img className="md:h-6 lg: h-6" src="/flags/france.png" alt="French" /></button>
      <button onClick={() => switchLanguage('en')}><img className="md:h-6 lg: h-6" src="/flags/uk.png" alt="English" /></button>
      <button onClick={() => switchLanguage('ar')}><img className="md:h-6 lg: h-6" src="/flags/saudi.png" alt="Arabic" /></button>
    </div>
  );
}

export default LanguageSwitcher;

