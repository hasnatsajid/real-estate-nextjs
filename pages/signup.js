import Image from 'next/image';

import Logo from '../public/images/logos/logo-flat.png';
import google from '../public/svgs/google.svg';
import fb from '../public/svgs/fb.svg';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="brand">
          <Image src={Logo} />
        </div>
        <div className="component">Create Account</div>
        <div className="providers">
          <div className="google">
            <Link href="/">
              <div>
                <Image src={google} />
                <p>Continue with Google</p>
              </div>
            </Link>
          </div>
          <div className="facebook">
            <Link href="/">
              <div>
                <Image src={fb} />
                <p>Continue with Facebook</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="signup">
          <div>
            <span>Not Registered ?</span>
            <Link href="/login">Create new account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
