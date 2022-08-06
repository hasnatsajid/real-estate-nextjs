import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/images/logos/logo-flat.png';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <nav>
        {!menuActive && <HiMenuAlt4 className="menu-icon" onClick={() => setMenuActive(true)} />}
        {menuActive && <HiX className="menu-icon" onClick={() => setMenuActive(false)} />}
        <div className="logo">
          <Image src={Logo} alt="My property asia | thailand" />
        </div>
        {menuActive && (
          <div className="navbar">
            <ul className="mobileActive">
              <li>
                <a href="/buy">Buy</a>
              </li>
              <li>
                <a href="/rent">Rent</a>
              </li>
              <li>
                <a href="/condos">Condos</a>
              </li>
              <li>
                <a href="/commercial">Commercial</a>
              </li>
              <li>
                <a href="/agents">Find Agent</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/advertise">Advertise</a>
              </li>
            </ul>
            <div className="auth">
              <div className="login">
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        )}
        <div className="navbar hideOnMobile">
          <ul>
            <li>
              <a href="/buy">Buy</a>
            </li>
            <li>
              <a href="/rent">Rent</a>
            </li>
            <li>
              <a href="/condos">Condos</a>
            </li>
            <li>
              <a href="/commercial">Commercial</a>
            </li>
            <li>
              <a href="/agents">Find Agent</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/advertise">Advertise</a>
            </li>
          </ul>
          <div className="auth">
            <div className="login">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
