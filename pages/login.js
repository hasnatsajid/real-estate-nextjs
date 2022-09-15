// import { useSession, signIn, signOut } from 'next-auth/react';

import Image from 'next/image';
import Logo from '../public/images/logos/logo-flat.png';
import google from '../public/svgs/google.svg';
import fb from '../public/svgs/fb.svg';
import Link from 'next/link';

export default function Login() {
  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br /> <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

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
            <span>Already have an account ?</span>
            <Link href="/signup">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
