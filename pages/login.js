import Image from 'next/image';

import Logo from '../public/images/logos/logo-flat.png';
import google from '../public/svgs/google.svg';
import fb from '../public/svgs/fb.svg';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="brand">
          <Image src={Logo} />
        </div>
        <div className="component">Login</div>
        <div className="providers">
          <div className="google">
            <Link href="/">
              <Image src={google} />
            </Link>
          </div>
          <div className="facebook">
            <Link href="/">
              <Image src={fb} />
            </Link>
          </div>
        </div>
        <div className="btn"></div>
      </div>
    </div>
  );
}
