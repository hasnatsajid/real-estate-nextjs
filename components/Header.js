import Image from 'next/image';
import Logo from '../public/images/logos/logo-flat.png';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          {/* <img src="" alt="" /> */}
          <Image
            src={Logo}
            alt="My property asia | thailand"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
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
      </nav>
    </div>
  );
};

export default Header;
