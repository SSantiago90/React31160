import imgLogo from '../assets/img/brand-logo-t.png';
import CartWidget from './CartWidget';

function NavBar(){
    return(
        <header className=" bg-yellow-300 container-fluid shadow-xl text-gray-600 body-font mb-5">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img width="120" src={imgLogo} alt="logo" />          
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">Category A</a>
            <a href="/" className="mr-5 hover:text-gray-900">Category B</a>
            <a href="/" className="mr-5 hover:text-gray-900">Category C</a>
          </nav>
          <div>
              <CartWidget />
          </div>
        </div>
      </header>
    )
}
 
export default NavBar;