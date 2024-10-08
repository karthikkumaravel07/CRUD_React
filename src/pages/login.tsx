import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const SignInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
  }
  return (
  <div>
    <p>Sign in with google to continue</p>
    <button onClick={SignInWithGoogle}>sign in with google</button>
  </div>
  )
};