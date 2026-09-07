// import { Link } from 'react-router-dom' 
// import logo from '../../public/logo.jpeg'
// import { useState } from 'react'


// const NavBar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <header className="fixed top-0 left-0 z-50 w-full flex items-center p-3 ">
//         <Link to="/">
//           <img
//             className="rounded-full h-30 w-30 border-2 border-gray-400 bg-gray-600 sm:rounded-full sm:w-25 sm:h-25 object-cover m-2"
//             src={logo}
//             alt="Logo"
//           />
//         </Link>

//          <button
//           className="sm:block md:hidden ml-auto text-white text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
        
//           <Link className=' text-white font-bold hover:shadow-gray-400 hover:text-amber-50 hover:bg-gray-600 transition duration-150 p-2 rounded-2xl' to="/catalogo" onClick={() => setIsOpen(false)}>Catálogo</Link>
//           <Link className=' text-white font-bold hover: shadow-gray-400 hover:text-amber-50 hover:bg-gray-600 transition duration-150 p-2 rounded-2xl' to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
        
//        <a href="https://www.instagram.com/afterhours.dyp?igsi=aHhweHZkY3NsN3Z0" target='_blank'> 
//           <button className=" flex justify-center items-center gap-2 border border-white p-2 rounded text-black  font-bold hover:bg-gray-500 bg-white border-solid-black cursor-pointer hover:text-white "> 
//            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  stroke-linecap="round" stroke-linejoin="round">
//             <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//             <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//           </svg>
          
//            <span>Instagram</span>
//           </button>
//         </a>
        
//       </header>

//       <div className="h-35"></div> 
      
//     </div>
//   )
// }

// export default NavBar  
      
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar fijo */}
      <header className="fixed bg-black top-0 left-0 z-50 w-full flex items-center p-3">
        
        {/* Logo */}
        <Link to="/">
          <img
            className="rounded-full h-16 w-16 border-2 border-gray-400 bg-gray-600 object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Botón hamburguesa en móviles */}
        <button
          className="sm:block md:hidden ml-auto text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links en pantallas md y mayores */}
        <nav className="hidden md:flex justify-baseline items-center gap-4 ml-4">
          <Link
            className="text-white font-bold hover:text-amber-50 hover:bg-gray-600 transition duration-150 p-2 rounded-2xl"
            to="/catalogo"
          >
            Catálogo
          </Link>
          <Link
            className="text-white font-bold hover:text-amber-50 hover:bg-gray-600 transition duration-150 p-2 rounded-2xl"
            to="/nosotros"
          >
            Nosotros
          </Link>
          <a
            href="https://www.instagram.com/afterhours.dyp?igsi=aHhweHZkY3NsN3Z0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex justify-center items-center gap-2 border border-white p-2 rounded text-black font-bold hover:bg-gray-500 bg-white cursor-pointer hover:text-white">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </button>
          </a>
        </nav>
      </header>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-transparent text-white p-4 rounded-lg mt-20">
          <Link
            className="font-bold hover:text-amber-50 hover:bg-white/40 p-2 rounded-2xl"
            to="/catalogo"
            onClick={() => setIsOpen(false)}
          >
            Catálogo
          </Link>
          <Link
            className="font-bold hover:text-amber-50 hover:bg-white/40 p-2 rounded-2xl"
            to="/nosotros"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <a
            href="https://www.instagram.com/afterhours.dyp?igsi=aHhweHZkY3NsN3Z0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <button className="flex justify-center items-center gap-2 border border-white p-2 rounded text-black font-bold hover:bg-gray-500 bg-white cursor-pointer hover:text-white">
              Instagram
            </button>
          </a>
        </div>
      )}

      {/* Espaciador para que el contenido no quede debajo del navbar */}
      <div className="h-24"></div>
    </div>
  );
};

export default NavBar;
