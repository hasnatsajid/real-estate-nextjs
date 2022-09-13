import Image from 'next/image';
import Link from 'next/link';
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
          <Link href="/">
            <Image src={Logo} alt="My property asia | thailand" />
          </Link>
        </div>
        {menuActive && (
          <div className="menubar">
            <ul className="mobileActive">
              <li>
                <Link href="/buy">Buy</Link>
              </li>
              <li>
                <Link href="/rent">Rent</Link>
              </li>
              <li>
                <Link href="/condos">Condos</Link>
              </li>
              <li>
                <Link href="/commercial">Commercial</Link>
              </li>
              <li>
                <Link href="/agents">Find Agent</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/advertise">Advertise</Link>
              </li>
            </ul>
            <div className="auth">
              <div className="login">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </div>
        )}
        <div className="menubar hideOnMobile">
          <ul>
            <li>
              <Link href="/buy">Buy</Link>
            </li>
            <li>
              <Link href="/rent">Rent</Link>
            </li>
            <li>
              <Link href="/condos">Condos</Link>
            </li>
            <li>
              <Link href="/commercial">Commercial</Link>
            </li>
            <li>
              <Link href="/agents">Find Agent</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/advertise">Advertise</Link>
            </li>
          </ul>
          <div className="auth">
            <div className="login">
              <Link href="/login">Login</Link>
            </div>
            <div className="signup">
              <Link href="/signup">Join</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
