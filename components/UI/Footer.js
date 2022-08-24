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
      <div className="footer__about">
        <div className="footer__about-wrapper">
          <div className="footer__about-company">
            <div className="footer__about-about">
              <div className="heading">About</div>
              <div className="links">
                <div className="link">About Us</div>
                <div className="link">Our Products</div>
                <div className="link">Careers</div>
              </div>
            </div>
            <div className="footer__about-learn">
              <div className="heading">Learn More</div>
              <div className="links">
                <div className="link">Privacy Policy</div>
                <div className="link">Terms and Conditions</div>
              </div>
            </div>
          </div>
          <div className="footer__about-newsletter">
            <div className="heading">Newsletter</div>
            <div className="email-holder">
              <input type="search" name="email" id="email-holder" placeholder="Enter your email" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
