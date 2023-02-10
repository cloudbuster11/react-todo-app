import Cookies from 'universal-cookie';
const cookies = new Cookies();

// logout
export default function LogoutComponent() {
  // destroy the cookie
  function logOut() {
    cookies.remove('TOKEN', { path: '/' });
    // redirect user to the landing page
    window.location.href = '/';
  }

  return (
    <button className='btn btn-logout btn-border' type='submit' variant='danger' onClick={() => logOut()}>
      Sign out
    </button>
  );
}
