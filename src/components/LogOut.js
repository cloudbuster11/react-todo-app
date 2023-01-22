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
    <div>
      <button type='submit' variant='danger' onClick={() => logOut()}>
        Logout
      </button>
    </div>
  );
}
