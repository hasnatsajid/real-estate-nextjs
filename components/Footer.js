import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPinterestP, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper"></div>
      <div className="footer__social">
        <Link href="/">
          <a className="footer__social-link">
            <FaFacebookF />
          </a>
        </Link>
        <Link href="/">
          <a className="footer__social-link">
            <FaTwitter />
          </a>
        </Link>
        <Link className="footer__social-link" href="/">
          <a className="footer__social-link">
            <FaYoutube />
          </a>
        </Link>
        <Link className="footer__social-link" href="/">
          <a className="footer__social-link">
            <FaLinkedinIn />
          </a>
        </Link>
        <Link className="footer__social-link" href="/">
          <a className="footer__social-link">
            <FaPinterestP />
          </a>
        </Link>
        <Link className="footer__social-link" href="/">
          <a className="footer__social-link">
            <FaInstagram />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
