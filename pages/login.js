import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );

  return (
    <div className="login">
      <div className="wrapper">
        <div className="brand"></div>
        <div className="category"></div>
        <div className="credentials"></div>
        <div className="btn"></div>
      </div>
    </div>
  );
};

export default Login;
