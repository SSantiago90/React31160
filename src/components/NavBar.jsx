import imgLogo from '../assets/img/brand-logo-t.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

import useCartContext from '../store/CartContext';

function NavBar(){
    const { contextFunction } = useCartContext();
    
    contextFunction();
    return(
        <header className=" bg-yellow-300 container-fluid shadow-xl text-gray-600 body-font mb-5">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img width="120" src={imgLogo} alt="logo" />          
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/category/Action" className="mr-5 hover:text-gray-900">Action</Link>
            <Link to="/category/Drama" className="mr-5 hover:text-gray-900">Drama</Link>
            <Link to="/category/Comedy" className="mr-5 hover:text-gray-900">Comedy</Link>
            <Link to="/category/Horror" className="mr-5 hover:text-gray-900">Horror</Link>
            <Link to="/category/Romance" className="mr-5 hover:text-gray-900">Romance</Link>
          </nav>
          <div>
              <CartWidget />
          </div>
        </div>
      </header>
    )
}
 
export default NavBar;