import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyB-rfix06777gnLCm1mLhog6bv6v3n1_2w",
	authDomain: "movie-app-863e9.firebaseapp.com",
	projectId: "movie-app-863e9",
	storageBucket: "movie-app-863e9.appspot.com",
	messagingSenderId: "41309321961",
	appId: "1:41309321961:web:770ef1c0da592393f18e78",
	measurementId: "G-SL39VSMJJV"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
