import  { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';

const useAuth = () => {
  const auth =useContext(AuthContext)
  return auth
};

export default useAuth;