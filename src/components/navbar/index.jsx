import logo from '../../assets/logo.svg';
import '../../styles/reset.css';
import CartWidget from '../CartWidget';
import ItemList from '../ItemList/index';

const Navbar = (a) => {
  return (
    <header className="header">
      <nav className="navbar">
        <figure className="navbar__logo">
          <img className="logo" src={logo} alt="Logo"></img>
        </figure>
        <menu className="navbar__menu">
          <ItemList label="Shop" />
          <ItemList label="Contacto" />
          <ItemList label="Login" />
          <li>
            <a className="navbar__link" href="">
              <CartWidget quantity={1} />
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
