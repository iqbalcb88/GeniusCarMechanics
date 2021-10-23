import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Firebase/firebase.config';

const initAppAuth = () => {
  initializeApp(firebaseConfig);
};

export default initAppAuth;
