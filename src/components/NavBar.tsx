import { Link } from 'react-router-dom' 
import logo from '../../public/logo.jpeg'


const NavBar = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 flex justify-baseline items-center m-3 gap-2 ">
        <Link to="/">
          <img
            className="rounded-full border-2 border-gray-400 bg-gray-600 w-30 h-30 object-cover m-2"
            src={logo}
            alt="Logo"
          />
        </Link>
        
          <Link className=' text-white font-bold hover:shadow-gray-400 hover:text-amber-50 hover:bg-gray-600 transition duration-150 p-2 rounded-2xl' to="/catalogo">Catálogo</Link>
          <Link className=' text-white font-bold hover: shadow-gray-400 hover:text-amber-50 hover:bg-gray-600 transition duration-150 p-2 rounded-2xl' to="/nosotros">Nosotros</Link>
        
       <a href="https://www.instagram.com/afterhours.dyp?igsi=aHhweHZkY3NsN3Z0" target='_blank'> 
          <button className=" flex justify-center items-center gap-3 ml-250 border border-white p-2 rounded text-black  font-bold hover:bg-gray-500 bg-white border-solid-black cursor-pointer hover:text-white "> 
           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          
           <span>Instagram</span>
          </button>
        </a>
        
      </header>
      
    </div>
  )
}

export default NavBar  
      
