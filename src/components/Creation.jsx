

const Creation = () => {
  return (
    <div id="portfolioSection" className="creation flex flex-col items-center space-y-5">
    <h3 className="mt-8">PORTFOLIO</h3>
    <h4 className="text-white md:text-4xl text-2xl">LATEST PROJECT</h4>
    <hr className="custom-hr border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
  {/* Carte 1 */}
  <div className=" flex flex-col items-center p-4">
    {/* Contenu de la carte */}
    <h3 className="text-xl font-semibold mb-2">My English Tchai</h3>
    <a className="flex flex-col items-center" rel="noreferrer" target="_blank" href="https://may-english-tchai.vercel.app/">
    <img className="w-1/2" src="img/myenglishtchai.png" alt="odb" />
    </a>
    <p className="text-white mt-2">Vite JS & Symfony</p>
    
  </div>

  {/* Carte 2 */}
  <div className="p-4 flex flex-col items-center">
    {/* Contenu de la carte */}
    <h3 className="text-xl font-semibold mb-2">ODB</h3>
    <a className="flex flex-col items-center" rel="noreferrer" target="_blank" href="https://github.com/EddyBough/ODBproject">
    <img className="w-1/2" src="img/odb.png" alt="odb" />
    </a>
    <p className="text-white mt-2">Twig & Node JS</p>
    
  </div>

</div>

    </div>
  )
}

export default Creation