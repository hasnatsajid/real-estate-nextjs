import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/images/logos/logo-flat.png';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  // const toggleMenu = () => {
  //   setMenuActive((prev) => !prev);
  // };

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
            <ul>
              <li>
                <a href="/">Buy</a>
              </li>
              <li>
                <a href="/">Rent</a>
              </li>
              <li>
                <a href="/">Condos</a>
              </li>
              <li>
                <a href="/">Commercial</a>
              </li>
              <li>
                <a href="/">Find Agent</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Advertise</a>
              </li>
            </ul>
            <div className="auth">
              <div className="login">
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
