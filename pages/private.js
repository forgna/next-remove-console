import { useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
const LoginPage = dynamic(() => import('./login'));

function PrivatePage({ loggedIn, ...props }) {
  // some hooks here that need to be before the condition

  useEffect(() => {
    if (loggedIn) return; // do nothing if the user is logged in
    Router.replace('/private', '/login', { shallow: true });
  }, [loggedIn]);

  if (!loggedIn) return <LoginPage />;
  // the JSX the private page will render

  return <p>Private Page</p>;
}

PrivatePage.getInitialProps = async context => {
  // readCookies is a fake function that should read the cookies from the request headers and return an object with them.
  // const { session } = readCookies(context.req);
  let session = true;
  if (!session) return { loggedIn: false };

  return { loggedIn: true };
};

export default PrivatePage;
