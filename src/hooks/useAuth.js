import { useContext } from 'react';
import { authContext } from '../context/AuthProvider';

function useAuth() {
  return useContext(authContext);
}
export default useAuth;
