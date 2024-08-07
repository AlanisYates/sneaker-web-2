import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { FirebaseAuth } from './firebase';

const googleProvider = new GoogleAuthProvider();

export const getAdditionlInfo = (result) => {
  const additionalUserInfo = getAdditionalUserInfo(result);
  return additionalUserInfo;
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    return result;
  } catch (e) {
    return e;
  }
};

export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const user = result.user;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signInWithEmailAndPass = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const user = result.user;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signUpWithEmailPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const user = result.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: 'no-authenticated', userId: null });

    setSession({ status: 'authenticated', userId: user.uid });
  });
};

export const logOut = async () => await FirebaseAuth.signOut();
