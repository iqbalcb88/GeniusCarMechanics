import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { user, singInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/home';
  const handleGoogleLogin = () => {
    singInWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <h1>Google SignIn</h1>
      <button onClick={handleGoogleLogin} className='btn btn-warning'>
        GoogleSignIn
      </button>
    </div>
  );
};

export default Login;

/* .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      }); 
      
      
          history.push('/home');
*/
