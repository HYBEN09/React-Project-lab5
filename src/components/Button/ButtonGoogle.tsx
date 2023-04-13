import classNames from 'classnames';
import { auth } from '@/firebase/auth';
import { db } from '@/firebase/firestore';
import classes from './Button.module.scss';
import { useNavigate } from 'react-router-dom';
import google from '/public/assets/googleLogo.svg';
import { collection, doc, setDoc } from '@firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

interface Props {
  widthValue?: string | number;
  maxWidthValue?: string | number;
  heightValue?: string | number;
  className?: string;
}

export function ButtonGoogle({
  widthValue,
  maxWidthValue,
  heightValue,
  className,
}: Props) {
  const buttonStyle = {
    width: widthValue,
    maxWidth: maxWidthValue,
    height: heightValue,
  };
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const { uid, displayName, photoURL } = user;
        const userData = {
          uid,
          displayName,
          photoURL,
        };
        const userRef = doc(collection(db, 'users'), uid);
        await setDoc(userRef, userData, { merge: true });
      }

      navigate('/mainpage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label={'Google 로그인 버튼'}
        className={classNames(classes.button, className)}
        style={buttonStyle}
        onClick={handleGoogleSignIn}
      >
        <img src={google} alt=" " />
        Google 로그인
      </button>
    </>
  );
}
