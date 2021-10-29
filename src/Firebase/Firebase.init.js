import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confi";
const initAuth = () => {
  initializeApp(firebaseConfig);
};
export default initAuth;
