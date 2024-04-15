import { FormattedMessage } from 'react-intl';

const Creation = () => {
  return (
    <div id="portfolioSection" className="creation flex flex-col items-center space-y-5">
      <h3 id="portfolioTitle" className="mt-8"><FormattedMessage id="portfolioTitle" /></h3>
      <h4 id="latestProjectTitle" className="text-white md:text-4xl text-2xl"><FormattedMessage id="latestProjectTitle" /></h4>
      <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
      <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* Carte 1 */}
        <div className=" flex flex-col items-center p-4">
          {/* Contenu de la carte */}
          <h3 id="englishTchaiTitle" className="text-xl font-semibold mb-2"><FormattedMessage id="englishTchaiTitle" /></h3>
          <a className="flex flex-col items-center" rel="noreferrer" target="_blank" href="https://may-english-tchai.vercel.app/">
            <img className="w-1/2" src="img/myenglishtchai.png" alt="odb" />
          </a>
          <p id="viteJSSymfonyDescription" className="text-white mt-2"><FormattedMessage id="viteJSSymfonyDescription" /></p>
        </div>

        {/* Carte 2 */}
        <div className="p-4 flex flex-col items-center">
          {/* Contenu de la carte */}
          <h3 id="odbTitle" className="text-xl font-semibold mb-2"><FormattedMessage id="odbTitle" /></h3>
          <a className="flex flex-col items-center" rel="noreferrer" target="_blank" href="https://github.com/EddyBough/ODBproject">
            <img className="w-1/2" src="img/odb.png" alt="odb" />
          </a>
          <p id="twigNodeJSDescription" className="text-white mt-2"><FormattedMessage id="twigNodeJSDescription" /></p>
        </div>
      </div>
    </div>
  );
}

export default Creation;
